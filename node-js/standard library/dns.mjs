import { error } from "console";
import dns from "dns/promises";

async function cekDNS() {
  try {
    const addres = await dns.lookup("google.com");
    console.log(addres);
    const IPv4 = await dns.resolve4("google.com");
    console.log(IPv4);
    const mailAddres = await dns.resolveMx("google.com");
    console.log(mailAddres);
  } catch (err) {
    console.log(err);
  }
}

cekDNS();
