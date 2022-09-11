function calculateGrade(marks) {
  const grades = marks.reduce((val, currentVal) => val + currentVal);
  const totalGrades = Math.round(grades / marks.length);

  if (totalGrades >= 90 && totalGrades <= 100) {
    return 'A';
  }
  if (totalGrades >= 80 && totalGrades <= 89) {
    return 'B';
  }
  if (totalGrades >= 70 && totalGrades <= 79) {
    return 'C';
  }
  if (totalGrades >= 60 && totalGrades <= 69) {
    return 'D';
  }
  if (totalGrades >= 50 && totalGrades <= 59) {
    return 'E';
  }
  if (totalGrades >= 40 && totalGrades <= 49) {
    return 'F';
  }
}

calculateGrade([19, 5, 42, 2, 77]);
calculateGrade([59, 80, 40, 2, 77]);
calculateGrade([89, 50, 40, 90, 77]);
calculateGrade([59, 75, 82, 77]);
calculateGrade([80, 80, 80]);
calculateGrade([10, 10, 97]);

module.exports = calculateGrade;
