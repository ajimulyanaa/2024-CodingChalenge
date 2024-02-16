// mencari nilai rata rata

// math.floor dibulatkan kebawah
// math.ceiling pembulatan keatas

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));
// =============
function getAverage1(marks) {
  let result = 0;
  for (let i = 0; i < marks.length; i++) {
    result += marks[i];
  }
  return Math.floor(result / marks.length);
}

console.log(getAverage1([1, 1, 1, 1, 1, 1, 1, 2]));
