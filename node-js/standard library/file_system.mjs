import fs, { readFile } from "fs/promises";

const buffer = await fs.readFile("node-js/standard library/file_system.mjs");

console.log(buffer.toString());

await fs.writeFile("temp.txt", "halo ini sigma man");
const read = await fs.readFile("temp.txt");
console.log(read.toString());
