import process from "process";

process.addListener("exit", (exitNumber) => {
  console.log(`hello world ${exitNumber}`);
});

console.log(process.report);

process.exit(99);

console.log("gak jalan nieh");
