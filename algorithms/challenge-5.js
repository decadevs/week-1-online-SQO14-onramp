// Implement the function filterList(arr) that takes a list of non-negative integers and 
// strings and returns a new list with the strings filtered out.
// 1. Initialize an empty array, newArr
// 2. Loop through the given array.
// 3. Check for the data types in the arr
// 4. Push all int types to the newArr

function filterList(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            newArr.push(arr[i])
        }
    }
    console.log(newArr);
}

filterList([1,2,'a','b']);
filterList([1,2,'aasf','1','123',123]);
  module.exports =filterList