import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

const nama = await rl.question("siapa namamu ?");
console.log(`Halo ${nama}`);

rl.close();
