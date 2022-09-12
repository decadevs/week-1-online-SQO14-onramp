// Challenge
// Implement an array that takes an array and returns the num of truthy values
// Steps
// 1. Loop through the array
// 2. Add all truthy values in an empty array
// 3. Return the length of the new array

function countTruthy(arr) {
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr2.push(arr[i]);
        }
        return arr2.length;
    }
}

module.exports = countTruthy;