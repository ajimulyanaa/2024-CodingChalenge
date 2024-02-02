// spred operator membuat array baru

function countBy1(x, n) {
  return [...Array(n)].map((_, i) => (i + 1) * x);
}

console.log(countBy1(1, 10));

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

console.log(countBy(1, 10));
