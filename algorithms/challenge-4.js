function calculateGrade(marks) {
 let count = 0;
    for(value of marks){
        count += value;
    }
    let average = Math.floor( count / marks.length);
    console.log(average)
    if(average <= 49){
        return "F";
    }
    else if(average > 49 && average <= 59){
        return "E";
    }
    else if(average > 59 && average <= 69){
        return "D";
    }
    else if(average > 69 && average <= 79){
        return "C";
    }
    else if(average > 79 && average <= 89){
        return "B";
    }
    else if(average > 89 && average <= 100){
        return "A";
    }
 
 }
  module.exports =calculateGrade
