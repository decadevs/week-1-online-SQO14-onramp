function calculateGrade(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
  }
  let avg = sum / marks.length;
  avg = Math.round(avg);
  if (avg >= 1 && avg <= 49) {
    return "f";
  } else if (avg >= 50 && avg <= 59) {
    return "e";
  } else if (avg >= 60 && avg <= 69) {
    return "d";
  } else if (avg >= 70 && avg <= 79) {
    return "c";
  } else if (avg >= 80 && avg <= 89) {
    return "b";
  } else if (avg >= 90 && avg <= 100) {
    return "a";
  } else {
    return "wrong grade";
  }
}
console.log(calculateGrade([80, 80, 70]));
  module.exports =calculateGrade
