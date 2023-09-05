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
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

console.log(getTotalPenjualan(dataPenjualanPakAldi));
