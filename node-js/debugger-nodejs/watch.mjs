function totalBelanjaan(harga) {
  let total = 0;
  for (const i of harga) {
    total += i;
    debugger;
  }
  return total;
}

const harga = [10, 20, 30, 40];
console.log(totalBelanjaan(harga));
