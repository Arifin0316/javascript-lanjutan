// templet literal
// const nama = 'arifin';
// const umur = 20;
// console.log(`halo nama saya ${nama}, umur saya ${umur},`);

// enbeded expresion
// console.log(`${1 + 1}`);
// console.log(`${alert('halo')}`);
// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// htmll fragment
// const mhs = {
//     nama: 'arifin',
//     umur: 20,
//     nrp:83792,
//     email:'arifin@gmail.com'
// };

// const el = `<div class="mhs">
//               <h2>${mhs.nama}</h2>
//               <span class="nrp">${mhs.nrp} </span>
//             </div>`;

// console.log(el)

// latihan templet literal
// const mhs = {
//     nama: 'arifin',
//     umur: 20,
//     nrp:83792,
//     email:'arifin@gmail.com'
// };

// const el = `<div class="mhs">
//               <h2>${mhs.nama}</h2>
//               <span class="nrp">${mhs.nrp} </span>
//             </div>`;

// loping
// const mhs = [
//     {
//         nama:'arifin',
//         email:'arifin@gmail.com'
//     },
//     {
//         nama:'alex',
//         email:'alex@gmail.com'
//     },
//     {
//         nama:'len',
//         email:'len@gmail.com'
//     }
// ];

// const el = `<div class="mhs">
// ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`;

// condisional
// ternari
// const lagu ={
//     judul: 'aku adalah',
//     penyayi:'isana',
//     fead:'fin'
// }
// const el = `<div class="lagu">
// <ul>
//  <li>${lagu.judul}</li>
//  <li>${lagu.penyayi}${lagu.fead ? `(fead ${lagu.fead})` : '' }</li>
// </ul>
// </div>`;

// nested
// html frangment bersarang
// const mhs = {
//     nama : 'arifin',
//     semester : 5,
//     matakulia:[
//         'rekayasa web',
//         'analisis web',
//         'tik',
//         'perancangan'
//     ]
// };

// function cetakMataKulia(matakulia) {
//     return `
//     <ol>
//       ${matakulia.map(mk => `<li>${mk}</li>`).join('')}
//     </ol>`;
// }

// const el =`<div class="mss">
// <h2>${mhs.nama}</h2>
// <span class="semester">semester : ${mhs.semester}</span>
// <h4>mata kulia</h4>
// ${cetakMataKulia(mhs.matakulia)}
// </div>`;

// document.body.innerHTML = el;


// tage tamplete
// const nama = 'arifin';
// const umur = 20;

// function coba(string, ...values){
//     return string.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '' );
// }

// const str = coba`halo nama saya ${nama}, saya ${umur}`;
// console.log(str)

// contoh
// const nama = 'arifin';
// const umur = 20;
// const email = 'arifin@gmail.com'

// function higleg(string, ...values){
//     return string.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '' );
// }

// const str = higleg`halo nama saya ${nama}, saya ${umur}, dan email saya ${email}`;
// document.body.innerHTML = str;

