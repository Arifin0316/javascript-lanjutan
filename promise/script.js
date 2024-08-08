// const coba = new Promise(resolve => {
//     setTimeout(() =>{
//         resolve('selesai')
//     }, 2000)
// });
// coba.then(() => console.log(coba));

function cobapromis() {
    return new Promise((resolve, reject) => {
        const waktu =5000;
        if(waktu < 5000){
        setTimeout(() => {
            resolve('selesai')
        }, waktu);
        }else{
            reject('kelamaan')
        }
    });
}

// const coba = cobapromis();
// coba.then(() => console.log(coba))
// .catch(() => console.log(coba));

async function cobaAsync(){
    try{
        const coba = await cobapromis();
        console.log(coba);
    } catch (err) {
        console.log(err)
    }
   
}

cobaAsync();