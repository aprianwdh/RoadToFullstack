import { resolve } from "path";

function sayPromise() {
  return Promise.resolve("Eunbi");
}

const name = await sayPromise();
console.log(name);

// async function run() {
//   const name = await sayPromise();
//   console.log(name);
// }
