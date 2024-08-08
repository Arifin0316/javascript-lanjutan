// objek literal
// let mahasiswa = {
//     nama: 'arifin',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat `);
//     }
// }


// const methotmahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`halo ${this.nama}, selamat `);
//     },
//     main: function(jam) {
//     this.energi -= jam;
//     console.log(`halo ${this.nama},`);
//     },
//     tidur:function(jam) {
//         this.energi += jam * 2;
//     }
// }
// function deklarasi
// function mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methotmahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }
// let arifin = mahasiswa('arifin', 10);

// prototep inheriten
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }
// mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `halo ${this.nama},selamat makan`;
// }
// mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `halo ${this.nama},selamat main`;
// }
// mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam * 2;
//     return `halo ${this.nama},selamat tidur`;
// }
// let arifin = new mahasiswa('arifin', 10);


// versi class
class mahasiswa {
    constructor(nama,energi) {
        this.nama = nama;
        this.energi = energi;
    }
    makan = function(porsi) {
     this.energi += porsi;
     return `halo ${this.nama},selamat makan`;
 }
  main = function(jam) {
    this.energi -= jam;
    return `halo ${this.nama},selamat main`;
 }
  tidur = function(jam) {
    this.energi += jam * 2;
    return `halo ${this.nama},selamat tidur`;
}
}
let arifin = new mahasiswa('arifin', 10);


// contruktor funsion
// function mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//     this.makan = methotmahasiswa.makan;
//     this.main = methotmahasiswa.main;
// }
// let arifin = new mahasiswa('arifin', 10);

