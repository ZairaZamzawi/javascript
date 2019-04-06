// deklarasi variable ada 3
var message = "Hello Coding";
let msg1 = "Hallo";

const msg2 = "Coding";

// Variable dengan deklarasi var dan let bisa di ubah value nya
// message = "Rubah 1"
// msg1 = "Rubah 2"


if (true) {
  var message = 1;
  let msg1 = 2;
  console.log(msg1 + " Value deklarasi variable menggunakan let di blok tertentu");
}

// value untuk var message berlaku public (diambil yg terakhir)
// value untuk let msg1 berlaku private (hanya berlaku di blok tertentu)


// Variable dengan deklarasi const tidak bisa di ubah value nya
// msg2 = "Rubah 3"

// Untuk menampilkan variable ke console
console.log(message);
console.log(msg1);
