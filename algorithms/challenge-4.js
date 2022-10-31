function calculateGrade(marks) {
 let myArr = marks;
 let count = 0;
    for(1=0; i < myArr.length; i++)
    {sum = myArr[i] + sum;}
    }
    let average = sum / myArr.length;
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
    else {
        return "Your average score could not be determined.
    }
 }
  module.exports =calculateGrade
