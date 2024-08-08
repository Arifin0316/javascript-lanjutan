// array
// const mhs = ['arifin','alex','len'];
// mengunakan for biasa
// for(i=0; i < mhs.length;i++) {
//     console.log(mhs[i]);
// }

// mengunakan foreach
// mhs.forEach(m => console.log(m));

// mengunakan for of
// for (const m of mhs) {
//     console.log(m)
// }

// string
// const names = 'arifin';
// for (const name of names){
//     console.log(name);
// }

// const mhs = ['arifin','alex','len'];
// mengunakan foreach
// mhs.forEach((mh,i) => {
//     console.log(`halo nama saya ${mh} saya mahasiswa ke${i +1}`);
// })

// mengunakan for of
// for (const [i,mh] of mhs.entries()) {
//     console.log(`halo nama saya ${mh} saya mahasiswa ke${i +1}`);
// }

// nodelist /dom
// const names = document.querySelectorAll('.nama');
// mengunakan foreach
// names.forEach(name => console.log(name.innerHTML))

// mengunakan for of
// for (n of names) {
//     console.log(n.innerHTML)
// }

// arguments
// function jumlahkAnangka(){
//     let jumlah = 0;
//     for (a of arguments){
//         jumlah += a;
//     }
//     return jumlah;
// }
// console.log(jumlahkAnangka(1,2,3,4,5));

// for in untuk me lopping objek
// const mhs = {
//     nama:'arifin',
//     umur:20,
//     email:'arifin@email.com'
// }
// for(m in mhs){
//     console.log(mhs[m])
// }
