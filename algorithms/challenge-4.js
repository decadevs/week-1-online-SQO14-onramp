function calculateGrade(marks) {
    let gradeScore = 0;
    let average;
    scoresCount = marks.length;
   for (i = 0; i < marks.length; i++){
       gradeScore += marks[i];
        average = gradeScore/scoresCount;
        }
        if(average >= 90  && average < 100){
            return "A"
            }
        else if(average >= 80 && average < 90){
            return "B"
        }
        else if(average >= 70 && average < 80){
            return "C"
        }
        else if(average >= 60 && average < 70){
            return "D"
        }
        else if(average >= 50 && average < 60){
            return "E"
        }
        else if(average >= 1 && average < 50){
            return "F"
    }
}
  module.exports =calculateGrade
