function fizzBuzz(input){
    if(input%3===0){
      return "fizz"
    } else if(input%5===0){
      return "buzz"
    } else if(input%3===0 && input%5===0){
      return "fizzbuzz"
    } else {
      return input
    }
  }
  console.log(fizzBuzz(3))
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(7))
  console.log(fizzBuzz(15))

module.exports = fizzBuzz
