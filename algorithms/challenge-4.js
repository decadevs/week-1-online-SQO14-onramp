function calculateGrade(marks) {
    let x = marks.reduce((num, sum) => num+sum, 0)
    let y = x/marks.length;
    if(y>=90){
        return "A"
    } else if(y>=80){
        return "B"
    } else if(y>=70){
        return "C"
    } else if(y>=60){
        return "D"
    } else if(y>=50){
        return "E"
    } else {
        return "F"
    }
}
console.log(calculateGrade([80, 80, 70]))
console.log(calculateGrade([19, 5, 42, 2, 77]))
console.log(calculateGrade([59, 80, 40, 2, 77]))
console.log(calculateGrade([89, 50, 40, 90, 77]))
  module.exports =calculateGrade
