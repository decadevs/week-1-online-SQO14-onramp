function fizzBuzz(input){
    if(input % 3 === 0 && input % 5 != 0){
        return "fizz";
    }
    else if (input % 5 === 0 && input % 3 != 0){
        return "buzz";
    }
    else if (input % 3 === 0 && input % 5 === 0){
        return "fizzBuzz";
    }
    else {
        return input;
    }
}
module.exports = fizzBuzz
