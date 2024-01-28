// mengurutkan array angka dari belakang
// Build a function that returns an array of integers from n to 1 where n>0.
// ===========================================
// dengan for

function reverseSeq1(n) {
  const result = [];
  for (let i = n; n >= 1; n--) {
    result.push(n);
  }
  return result;
}

console.log(reverseSeq1(9));

// ===================================================

const reverseSeq = (n) => {
  return Array(n) // array dengan jumlah elemen n
    .fill() // untuk undefine array
    .map((elemen, index) => index + 1) // memetakan array
    .reverse(); //membalikan array
};

console.log(reverseSeq(5));
