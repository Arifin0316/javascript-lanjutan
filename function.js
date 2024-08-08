// aray function

// let tmpilNma = (nama,waktu) => {return `halo ${nama}, selamat ${waktu}`;};
// console.log(tmpilNma(`arifin`,`malam`));




// implesit returnt
// let tmpilNma = nama => `halo ${nama},`;
// console.log(tmpilNma(`arifin`));

// let tmpilNma = () => `halo word`;
// console.log(tmpilNma());

// let mahasiswa = ['arifin', 'alex','afdan'];

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);


// let jumlahHuruf = mahasiswa.map(nama => ({nama, jumlahHuruf: nama.length }) );
// console.table(jumlahHuruf);


// konsep this pada function

// consuctor funsion
// const Mahasiswa = function() {
//     this.nama = 'arifin';
//     this.umur = 20;
//     this.sayhelo = function(){
//         console.log(`halo ${this.nama}, saya umur ${this.umur} tahun`);
//     }
// }

// const arifin = new Mahasiswa();


// eroy function
// const Mahasiswa = function() {
//     this.nama = 'arifin';
//     this.umur = 20;
//     this.sayhelo = () => {
//         console.log(`halo ${this.nama}, saya umur ${this.umur} tahun`);
//     }
// }

// const arifin = new Mahasiswa();


// consuctor funsion
// const Mahasiswa = function() {
//     this.nama = 'arifin';
//     this.umur = 20;
//     this.sayhelo = function(){
//         console.log(`halo ${this.nama}, saya umur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }

// const arifin = new Mahasiswa();