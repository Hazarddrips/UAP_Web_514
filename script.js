var stockData = [{ kode: "001", nama: "A", harga: 10000 },
{ kode: "002", nama: "B", harga: 20000 },
{ kode: "003", nama: "C", harga: 30000 },
];

function stockAwal() {
  let tableBody = document.getElementById("stockTableBody");

  stockData.forEach(item => {
    let newRow = tableBody.insertRow();
    let cellKodeBarang = newRow.insertCell(0);
    let cellNamaBarang = newRow.insertCell(1);
    let cellHargaBarang = newRow.insertCell(2);

    cellKodeBarang.innerHTML = item.kode;
    cellNamaBarang.innerHTML = item.nama;
    cellHargaBarang.innerHTML = "Rp " + item.harga;
  });
}

window.onload = stockAwal;

function prosesPembelian() {
  let beliKodeBarang = document.getElementById("beliKodeBarang").value;
  let jumlahBeli = document.getElementById("jumlahBeli").value;

  let barangDibeli = stockData.find(item => item.kode === beliKodeBarang);

  if (barangDibeli) {
    let totalBayar = jumlahBeli * barangDibeli.harga;

    window.alert(`Jumlah Total Barang Dibeli : Rp ${totalBayar}`);

    let jumlahUang = window.prompt(`Masukan Jumlah Uang Yang Dibayar `, "");
    
    let kembalian = jumlahUang - totalBayar;


    window.alert(`Kemabalian Uang Adalah : Rp ${kembalian}`);

  }else {
    window.alert("Kode Barang Tidak Ditemukan");
  }
}
