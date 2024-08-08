// membuat closure
// function init() {
//     let nama = `arifin`;
//     function tampilNama() {
//         console.log(nama)
//     } 
//     tampilNama();
// }
// init();

// faktori function

// function ucapkanSalam(waktu){
//     return function(nama) {
//         console.log(`halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// selamatMalam('arifin');
// selamatPagi('afdan');


// contoh closure

// let add = (function(){
//     let counter = 0;
//     return function(){
//         return ++counter
//     }
// })();

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());