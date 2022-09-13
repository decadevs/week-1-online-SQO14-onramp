function fizzBuzz(input){
    if(input % 3 == 0){
        console.log('fizz');
    }else if(input % 5 == 0){
        console.log('buzz')
    }else if(input % 3 == 0 && input % 5 == 0){
        console.log('fizzbuzz')
    }else{
        console.log('number not divisible by 3 or 5')
    }
}
fizzBuzz([1,2,3,4,5,6,15,30,25,18,45,9,12]);

module.exports = fizzBuzz
