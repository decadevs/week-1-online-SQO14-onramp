function sumMix(arr) {
   function sumMix(arr) {
   let count = 0
    if(typeof(arr)=='number'){
        return arr;
    }
    else{
        for(value of arr){
            count += value;
        }

    }
    return count;
 }

  module.exports = sumMix