function calculateGrade(marks) {
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];

    const avg = sum / marks.length;

    if (avg < 50) {
      return "F";
    } else if (avg >= 50 && avg < 60) {
      return "E";
    } else if (avg >= 60 && avg < 70) {
      return "D";
    } else if (avg >= 70 && avg < 80) {
      return "c";
    } else if (avg >= 80 && avg < 90) {
      return "B";
    } else if (avg >= 90 && avg <= 100) {
      return "A";
    }
  }
}
module.exports = calculateGrade;
