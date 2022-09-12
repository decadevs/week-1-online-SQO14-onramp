// Implement the function calculateGrade(marks) that takes an array of grades
// and calculates the average. It should return the average grade by comparing
//  with the grade table.
// 1. Initialize total and assign 0
// 2. Initialize avg and grade
// 3. Loop through the marks to get the total
// 4. Divide total by marks.length and round to 2 decimal places to get avg
// 5. Run avg through conditional statements to get grade

function calculateGrade(marks) {
    let total = 0;
    let avg;
    let grade;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
        avg = (total / marks.length).toFixed(2);
    }
    
    if (avg <= 49) {
        grade = 'F';
    } else if (avg < 59) {
        grade = 'E';
    } else if (avg < 69) {
        grade = 'D';
    } else if (avg < 79) {
        grade = 'C';
    } else if (avg < 89) {
        grade = 'B';
    } else if (avg > 90 & avg <= 100 ) {
        grade = 'A'
    }
    console.log(`Average is: ${avg}%`);
    console.log(`Grade is: ${grade}`);
}

calculateGrade([100, 10, 89])
  module.exports =calculateGrade
