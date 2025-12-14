import { EventEmitter } from "events";

const emiter = new EventEmitter();

emiter.addListener("sayHello", (nama) => {
  console.log(`Halo namaku pria ${nama} ZIGMAA`);
});
emiter.addListener("babatBuahlil", (berapaKali) => {
  console.log(
    `mari kita bantai buahlil lalu di rica rica sebanyak ${berapaKali} kali`
  );
});

emiter.emit("sayHello", "Buahlil");
emiter.emit("babatBuahlil", 999);
