function calculateGrade(marks) {
   const numbers = marks
   const sum = numbers.reduce((x, y) => (x + y))
   let avg = Math.round( sum / marks.length)
   

    if (avg > 89 && avg < 101) {
    return 'A';
  } else if (avg > 79 && avg < 90) {
    return 'B';
  } else if (avg > 69 && avg < 80) {
    return 'C';
  } else if (avg > 59 && avg < 70) {
    return 'D';
  } else if (avg > 49 && avg < 60) {
    return 'E';
  } else {
    return 'F';
  }
  
  }
  
    console.log(calculateGrade([80, 80, 70])) 
    console.log(calculateGrade([19, 5, 42, 2, 77])) 
    console.log(calculateGrade([59, 80, 40, 2, 77]))
    console.log(calculateGrade([89, 50, 40, 90, 77]))
    // console.log(calculateGrade([19, 5, 42, 2, 77]));
    // console.log(calculateGrade([59, 80, 40, 2, 77]));
    // console.log(calculateGrade([89, 50, 40, 90, 77]));
    // console.log(calculateGrade([59, 75, 82, 77]));

    

    module.exports = calculateGrade




    /*Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. 
    //It should return the average grade by comparing with the grade table
1-49: F
50-59: E
60-69: D
70-79: C
80-89: B
90-100: A
*/