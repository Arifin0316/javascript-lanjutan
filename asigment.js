// destruckturing array
// const perkenalan = ['halo','nama','saya','arifin'];

// const [salam,satu,dua,nama] = perkenalan;

// skiping item
// const [salam,,,nama] = perkenalan;
// console.log(salam);

// swap item
// let a = 1;
// let b =2;
// console.log(a);
// console.log(b);
// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function coba() {
//     return [1,2]
// }
// const [a,b] = coba();
// console.log(b)

// rest parameter 
// const [a, ...values] = [1,2,3,4,5,6];
// console.log(values);



// distruturing objek
// const mhs = {
//     nama: 'arifin',
//     umur: 300
// }
// const {nama,umur} = mhs;
// console.log(umur)

// asegmen tanpa deklarasi objek

// ({nama,umur} = {nama: 'arifin', umur: 300});
// console.log(umur)

// asint ke variabel baru
// const mhs = {
//     nama: 'arifin',
//     umur: 300
// }
// const {nama:n,umur:u} = mhs;
// console.log(n)

// memberikan defolt value
// const mhs = {
//     nama: 'arifin',
//     umur: 300,
//     email:'arifin@gmail.com'
// }
// const {nama,umur,email ='@defoul.com'} = mhs;
// console.log(email)

// memberi nilai defolt + asing ke variabel baru
// const mhs = {
//     nama: 'arifin',
//     umur: 300,
//     email:'arifin@gmail.com'
// }
// const {nama:a,umur:u,email:e ='@defoul.com'} = mhs;
// console.log(e)

// rest parameter
// const mhs = {
//     nama: 'arifin',
//     umur: 300,
//     email:'arifin@gmail.com'
// }
// const {nama, ...values} = mhs;
// console.log(values)

// mengambil filt pada objek setelah di kirim sebagai parameter untuk funtion
const mhs = {
    id:'123',
    nama: 'arifin',
    umur: 300,
    email:'arifin@gmail.com'
}
function getIdMhs({id,nama,umur}) {
    return id;
};
console.log(getIdMhs(mhs));