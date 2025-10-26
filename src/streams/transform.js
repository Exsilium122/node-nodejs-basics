import { Transform } from 'node:stream';


const transform = async () => {
  const transform = new Transform({
    transform(chunk, encoding, callback) {
       const reversed = chunk.toString().split('').reverse().join('');
       callback(null, reversed);
  }});
  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
