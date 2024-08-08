// latihan closure
// let add = function(x){
//     return function(y){
//         return x + y;
//     }
// }

// let add5 = add(5);
// let add10 = add(10);

// console.log(add5(2));
// console.log(add5(10));
// console.log(add10(2));

// latihan aroy funsion
const box = document.querySelector('.box')
box.addEventListener('click',function(){
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout(() => {
    this.classList.toggle(dua);
    },600);
});