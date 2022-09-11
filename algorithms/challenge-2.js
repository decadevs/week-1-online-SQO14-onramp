function fizzBuzz(input) {
  if (input % 5 === 0 && input % 3 === 0) {
    return 'fizzbuzz';
  } else if (input % 5 === 0) {
    return 'buzz';
  } else if (input % 3 === 0) {
    return 'fizz';
  } else {
    return input;
  }
}

fizzBuzz(3);
fizzBuzz(9);
fizzBuzz(5);
fizzBuzz(25);
fizzBuzz(15);
fizzBuzz(7);

module.exports = fizzBuzz;
