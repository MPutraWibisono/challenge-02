function getInfoPenjualan(dataPenjualan) {
  let a = dataPenjualan;
  let omset = 0;
  let totalModal = 0;
  let penulisBuku = [];
  let bukuTerjualPenulis = [];
  if (Array.isArray(a) && a.length > 0) {
    let terlaris = a[0].totalTerjual;
    //for loop per object
    for (let i = 0; i < a.length; i++) {
      if (typeof a[i] != "object") {
        return "Array element data type must be an object";
      } else {
        //logika perhitungan
        if (penulisBuku.includes(a[i].penulis)) {
          let index = penulisBuku.indexOf(a[i].penulis);
          bukuTerjualPenulis[index] += a[i].totalTerjual;
        } else {
          penulisBuku.push(a[i].penulis);
          bukuTerjualPenulis.push(a[i].totalTerjual);
        }
        omset += a[i].hargaJual * a[i].totalTerjual;
        totalModal += a[i].hargaBeli * (a[i].totalTerjual + a[i].sisaStok);
        if (a[i].totalTerjual > terlaris) {
          terlaris = a[i].totalTerjual;
          globalThis.produkBukuTerlaris = a[i].namaProduk;
        }
      }
    }
    globalThis.penulisTerlaris =
      penulisBuku[bukuTerjualPenulis.indexOf(Math.max(...bukuTerjualPenulis))];
    globalThis.totalKeuntungan = omset - totalModal;
    globalThis.presentaseKeuntungan =
      parseInt((totalKeuntungan / omset) * 100) + "%";
    //format Rupiah
    function formatRupiah(uang) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(uang);
    }
    totalKeuntungan = formatRupiah(totalKeuntungan);
    totalModal = formatRupiah(totalModal);
  } else {
    return "Error: Invalid data, the element should be an array object more than 1 number.";
  }
  return [
    `Omset : ${formatRupiah(omset)}`,
    {
      totalKeuntungan,
      totalModal,
      presentaseKeuntungan,
      produkBukuTerlaris,
      penulisTerlaris,
    },
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
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
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
    totalTerjual: 20,
    sisaStok: 56,
  },
];

console.log(getInfoPenjualan(dataPenjualanNovel));
