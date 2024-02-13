function getGrade(...s) {
  const score = s.reduce((acc, cur) => acc + cur) / s.length;
  return score < 60 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';
}

console.log(getGrade(95, 90, 93));

const getGrade1 = (...s) => {
  const score = s.reduce((acc, cur) => acc + cur) / s.length;
  return score < 60 ? 'F' : score < 70 ? 'D' : score < 80 ? 'C' : score < 90 ? 'B' : 'A';
};
console.log(getGrade(58, 59, 60));
