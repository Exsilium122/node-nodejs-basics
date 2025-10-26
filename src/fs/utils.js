import fs from 'fs/promises';

export async function exists(path) {
    await fs
    .access(path)
    .catch(err => { 
        if (err.code === 'ENOENT') throw new Error('FS operation failed');
        else throw err;
    });
}


export async function notExists(path) {
    await fs
    .access(path)
    .then(_ => { throw new Error('FS operation failed'); })
    .catch(err => {
        if (err.code === 'ENOENT') return true;
        else throw err;
    });}