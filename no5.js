function getInfoPenjualan(dataPenjualan) {
  let a = dataPenjualan;
  //deklarasi object baru
  const info = {
    totalKeuntungan: 0,
    totalModal: 0,
    presentaseKeuntungan: null,
    produkBukuTerlaris: null,
    penulisTerlaris: null,
  };
  let omset = 0; //deklarasi omset
  if (Array.isArray(a) && a.length > 0) {
    let terlaris = a[0].totalTerjual; // inisialisasi terlaris
    //for loop per object
    for (let i = 0; i < a.length; i++) {
      if (typeof a[i] != "object") {
        return "Array element data type must be an object";
      } else {
        //logika perhitungan
        omset += a[i].hargaJual * a[i].totalTerjual;
        info.totalModal += a[i].hargaBeli * (a[i].totalTerjual + a[i].sisaStok);
        if (a[i].totalTerjual > terlaris) {
          terlaris = a[i].totalTerjual;
          info.produkBukuTerlaris = a[i].namaProduk;
          info.penulisTerlaris = a[i].penulis;
        }
      }
    }
    info.totalKeuntungan = omset - info.totalModal;
    //format Rupiah
    info.presentaseKeuntungan =
      parseInt((info.totalKeuntungan / omset) * 100) + "%";
    info.totalKeuntungan = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(info.totalKeuntungan);
    info.totalModal = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(info.totalModal);
  } else {
    return "Error: Invalid data, the element should be an array object more than 1 number.";
  }
  return [
    `Omset : ${new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(omset)}`,
    info,
  ];
}

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 183000,
    totalTerjual: 171,
    sisaStok: 28,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 28,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
