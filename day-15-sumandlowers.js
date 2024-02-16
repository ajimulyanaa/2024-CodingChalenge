// menjumlahkan elemen array tanpa menjumlahkan nilai terbesar dan terkecil

function sumArray(array) {
   return  array === null || array.length <=2? 0:
   array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,curr)=>acc+curr);
    
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]))