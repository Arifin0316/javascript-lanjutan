// spread operator
// memecah interebel menjadi singel element
// const mhs=['arifin','dody','alex'];

// console.log(...mhs);

// mengabungkan isi array
// const mhs=['arifin','dody','alex'];
// const dosen=['ali','dody','lin'];
// const orang =[...mhs, 'amir',...dosen];
// console.log(orang);

// mencopy array
// const mhs=['arifin','dody','alex'];
// const mhs1 = [...mhs];
// mhs1[0] = 'fin';
// console.log(mhs);

// contoh
// const liMhs = document.querySelectorAll('li');
// cara biasa
// const mhs=[];
// for( let i=0; i < liMhs.length; i++) {
//     mhs.push(liMhs[i].textContent);
// }

// mengunakan sprid operator
// const mhs = [...liMhs].map(m => m.textContent);
// console.log(mhs);

// const nama = document.querySelector('.nama');
// const huruf =[...nama.textContent].map(h => `<span> ${h} </span>`).join('')
// nama.innerHTML = huruf;




// rest parameter
// function myFunc(a,...myAngs){
    // return `a = ${a},dan myAngs = ${myAngs}`
    // return Array.from(arguments);
    // return [...arguments]
// }
// console.log(myFunc(1,2,3,4,5,6));

// function jumlahkan(...angka) {
    // let total = 0;
    // for (const a of angka) {
    //     total += a;
    // }
    // return total;
    // mengunakan caren falue
//     return angka.reduce((a,b) => a+b);
// }
// console.log(jumlahkan(1,2,3,4,5))
// console.log(jumlahkan(1,2,3,4,5))


// array destruturin
// const kelompok1 =['arifin','boby','alex','eric']
// const [ketua,wakil,...angota] = kelompok1;
// console.log(angota)

// objek destrukturing
// const team = {
//     frontend:'arifin',
//     beckend:'alex',
//     ux:'boby'
// }
// const {frontend,...myteam} = team;
// console.log(frontend);

// filter
// function filterBy(type,...value){
//     return value.filter(v => typeof v === type);
// }
// console.log(filterBy('string',1,2,'fin',false,11,'dody',true));