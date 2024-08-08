const angka = [-1, 8,9,1,4,-5,-4,3,2,9];

// mencari angka yang >= 3
// mengunakan for
// const newAngka = [];
// for( let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3 ) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// filter
// const newAngka = angka.filter(a => a >= 3 );
// console.log(newAngka);
// map
// kalikan semua angka dangan 2
//  const newAngka = angka.map(a => a * 2 );
//  console.log(newAngka);

//  reduse 
// jumlkan seluru elemet pada array
// const newAngka = angka.reduce((acumulator,curentValue) => acumulator + curentValue, 5 );
// console.log(newAngka);

// methot chining
// cari angka > 5
// kalikan 3
// jumlahkan 
// const hasil = angka.filter(a => a > 5 )
//     .map(a => a * 3 )
//     .reduce((acc,cur) => acc + cur );
// console.log(hasil);