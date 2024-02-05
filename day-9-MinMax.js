// mengurutkan angaka

// cara 1
const max1 = (list) => list.sort((a, b) => a - b)[0];
const min1 = (list) => list.sort((a, b) => b - a)[0];

console.log(max1([-52, 56, 30, 29, -54, 0, -110]));
console.log(min1([-52, 56, 30, 29, -54, 0, -110]));

// cara2
// ...list adalah spred operator yang berfungsi untuk mengubah [1,21,21] menjadi (1,21,21)
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
