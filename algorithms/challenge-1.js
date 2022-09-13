function countTruthy(arr) {
    let number1 = [6,3,0,30,7]
    number1.filter((item)=>{
        if(item == 0){
            return item;
            console.log(number1.length);
        }
    });
    

}
countTruthy([6,3,0,30,7]);
module.exports = countTruthy




// # Challenge 1
// Implement a function countTruthy(arr) that takes an array and returns the number of truthy values

// # Example
// countTruthy([6, 3, 0, 30, 7])  to return 4 
// countTruthy(['', 3, 0, 30, 7]) to return 3
// countTruthy(['', 0, 0, undefined, 7])  to return 1