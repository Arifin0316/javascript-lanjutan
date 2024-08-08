// sinkronus callback
// function halo(nama){
//     alert(`hala ${nama}`);
// }

// function tampilkan(callback) {
//     const nama =prompt('masukan nama: ');
//     callback(nama);
// }
// tampilkan(nama => alert(`halo ${nama}`));


// contoh
// const mhs =[
//     {
//     nama:"arifin",
//     nrp:"7383928",
//     email:"arifin@gmail.com",
//     jurusan:"frontend",
//     idDosen:1
// },
//     {
//     nama:"dody",
//     nrp:"7739928",
//     email:"dody@gmail.com",
//     jurusan:"beckend",
//     idDosen:2
// },
//     {
//     nama:"alex",
//     nrp:"69329822",
//     email:"alex@gmail.com",
//     jurusan:"ux",
//     idDosen:3
// },
// ];
// console.log('mulai');
// mhs.forEach(m =>{ 
//     for(let i=0;i<10000;i++){
//         console.log('halo')
//     }
//     console.log(m.nama)

// });
// console.log('akhir');


// ansingkronus call back
// mengunakan javascript murni


// function getDataMahasiswa(url,succsec,error) {
//     let xhr =new XMLHttpRequest();
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState === 4 ){
//             if(xhr.status === 200){
//              succsec(xhr.response);
//             }else if(xhr.status === 404){
//                 error();
//             }
//         }
//     }
//     xhr.open('get',url);
//     xhr.send();
// }
// console.log('mulai');
// getDataMahasiswa('data/mahasiswa.json',result => {
//     const mhs = JSON.parse(result);
//     mhs.forEach(m => console.log(m.nama));
// },()=>{

// });
// console.log('selesai');


//mengunakan jqueri
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');