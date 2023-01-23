function calculateGrade(marks) {
   const numbers = marks
   const sum = numbers.reduce((x, y) => (x + y))
   let avg = Math.round( sum / marks.length)
   return avg
  }
  
    console.log(calculateGrade([80, 80, 70])) 
    console.log(calculateGrade([19, 5, 42, 2, 77])) 
    console.log(calculateGrade([59, 80, 40, 2, 77]))
    console.log(calculateGrade([89, 50, 40, 90, 77]))

    module.exports =console.log(calculateGrade)