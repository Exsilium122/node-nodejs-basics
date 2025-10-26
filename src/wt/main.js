import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';

const workerFilePath = './wt/worker.js';

const performCalculations = async () => {
  const cpusCount = cpus().length;
  const promises = Array(cpusCount).fill(0)
    .map(( _, idx) => {
      return new Promise( res => {
        const worker = new Worker(workerFilePath);
        worker.on('message', data => res({ status: 'resolved', data}));
        worker.on('error', err => res({ status: 'error', data: null}));
        worker.postMessage(10 + idx);
    });
  });
  const result = await Promise.all(promises);
  console.log(result);
};

await performCalculations();
