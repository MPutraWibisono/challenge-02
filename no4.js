function getTotalPenjualan(dataPenjualan) {
  if (Array.isArray(dataPenjualan) && dataPenjualan.length > 0) {
    let total = 0;
    for (let i = 0; i < dataPenjualan.length; i++) {
      if (typeof dataPenjualan[i] != "object") {
        return "Array element data type must be an object";
      } else {
        total += dataPenjualan[i].totalTerjual;
      }
    }
    return total;
  } else {
    return "Error: Invalid data, the element should be an array object more than 1 number.";
  }
}

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760808,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High",
    hargaSatuan: 360808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 98,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120808,
    kategori: "Sepatu Sneaker",
    totalTerjual: 98,
  },
];

console.log(getTotalPenjualan(dataPenjualanPakAldi));
