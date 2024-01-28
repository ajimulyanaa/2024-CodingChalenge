// mengalikan semua isi array


// cara 1
function grow1(x){
    let result=x[0];
    for(let i=1;i<x.length;i++){
        result*=x[i]
    }
    return result;
}
console.log(grow1([1, 2, 3]))


// cara 2
// menggunakan fungsi reduce array
// mengembalikan nilai array baru
function grow(x){
    const result=x.reduce((acc,curr)=>acc*curr,1);
    return result;
}

console.log(grow([1,3,4,5]))

