// menambahkan 2 array

function arrayPlusArray1(arr1, arr2) {
  return [...arr1, ...arr2].reduce((acc, cur) => acc + cur); //something went wrong
}

console.log(arrayPlusArray1([1, 2, 3], [4, 5, 6]));

const arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, cur) => acc + cur); //something went wrong

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
