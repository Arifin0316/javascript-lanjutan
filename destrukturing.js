// destrukturing
// function kalkulasi(a,b) {
//     return [a+b,a-b,a/b];
// }

// const [jumlah, kali] = penjumlahanPerkalian(1,2);
// console.log(kali); 

// const [tambah,kurang,bagi,kali = 'tidak ada'] = kalkulasi(1,2);
// console.log(bagi);

// objek
// function kalkulasi(a,b) {
//     return {
//         tambah: a+b,
//         // kurang: a-b,
//         bagi:a/b,
//         kali:a*b,
//     };
// }
// const {kali,bagi,tambah,kurang = 'tidak ada'} = kalkulasi(1,2);
// console.log(kurang)


// distrukturing funsion argument
const mhs1 ={
    nama:'arifin',
    umur:20,
    email:'arifin@gmail.com',
    nilai:{
        uts:70,
        uas:80,
        tugas:90
    }
}

function cetakmhs({nama,umur,email,nilai:{uts,uas,tugas}}) {
    return `halo nama saya ${nama}, umur saya ${umur}, nilai uas saya ${uas}`
}
console.log(cetakmhs(mhs1));