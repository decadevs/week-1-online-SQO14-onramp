function sumMix(arr) {
   let totalNum = 0
   for (let i = 0; i< arr.length; i++){
    totalNum += parseInt(arr[i])
   }
   return totalNum
 }

  module.exports = sumMix