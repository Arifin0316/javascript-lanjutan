// mengunakan jquery
// $.ajax({
//     url:' http://www.omdbapi.com/?i=tt3896198&apikey=4f3dbd0',
//     success: movies => console.log(movies)
// })

// mengunakan fectch
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=4f3dbd0')
//     .then(Response => Response.json())
//     .then(Response => console.log(Response))

// promise 
// objek yang merepresetasikan keberhasilan / kegagalen sebua even yang ansingkronusdi masa yang akan datang
// janji(terpenuhi / inkar)
// state(fulfiled / rejected / pending)
// callbeck(resolv / reject / finally)
// aksi(then / catch)

// contoh 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if(ditepati){
//         resolve('janji di tepati');
//     }else{
//         reject('inkar janji');
//     }
// });

// janji1
//     .then(Response => console.log('ok :' + Response))
//     .catch(Response => console.log('not ok :' + Response))

// contoh 2
// let ditepati = false;
// const janji2 = new Promise ((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('di tepati setela beberapa waktu')
//         }, 2000)
//     }else{
//         setTimeout(() =>{
//             resolve('tidak di tepati setela beberapa saat')
//         }, 2000)
//     }
// });
// console.log('muali')
// console.log(janji2.then(() => console.log(janji2)))
// janji2
// .finally(() => console.log('selesi menunguh'))
// .then(Response => console.log('ok :' + Response))
// .catch(Response => console.log('not ok :' + Response));
// console.log('selesai')

// mengabungkan 2 promis
const film = new Promise(resolve => {
    setTimeout(() =>{
        resolve([{
            judul:'iron man',
            sutadara:'arifin',
            pemeran:'dody,alex'
        }]);
    }, 1000);
})

const cuaca = new Promise(resolve =>{
    setTimeout(() =>{
        resolve([{
            kota:'malang',
            suhu:20,
            kondisi:'cerah berawant'
        }]);
    },500);
})