// Implement a function fizzBuzz(input) that takes a number and returns
// 1. 'Fizz' if the number is divisible by 3
// 2. 'Buzz' if the number is divisible by 5, and
// 3. 'FizzBuzz' if the number is divisible by 3 and 5
// 4. input if the number is not divisible by 3 or 5


function fizzBuzz(input){
    if (input % 15 === 0) {
        console.log("fizzbuzz");
    } else if (input % 3 === 0) {
        console.log("fizz");
    } else if (input % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(`${input}: is not divisible by 3 or 5.`);
    }
};

fizzBuzz(11);

module.exports = fizzBuzz
