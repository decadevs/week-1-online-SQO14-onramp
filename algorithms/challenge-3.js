// Implement the function sumMix(arr) that given an array of integers as strings and numbers,
// returns the sum of the array values as if all were numbers.
// 1. Create an empty array, newArr
// 1. Initialize a sum variable and assign 0
// 2. Loop through the given array, arr
// 3. Convert the values in arr to integers and push to newArr
// 4. Loop through newArr and add all the values
// 5. Log the result to the console.


function sumMix(arr) {
   let newArr = [];
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
    newArr.push(parseInt(arr[i]));
   }
   for (let j = 0; j < newArr.length; j++) {
    sum += newArr[j];
   }
   console.log(sum);
 }

 sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]);
  module.exports = sumMix