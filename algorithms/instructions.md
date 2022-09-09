# Challenge 1
Implement a function countTruthy(arr) that takes an array and returns the number of truthy values

# Example
countTruthy([6, 3, 0, 30, 7])  to return 4 
countTruthy(['', 3, 0, 30, 7]) to return 3
countTruthy(['', 0, 0, undefined, 7])  to return 1

# Challenge 2

Implement a function fizzBuzz(input) that takes a number and retuns:
"fizz": if the number is divisible by 3
"buzz": if the number is divisible by 5
"fizzbuzz": if the number is both divisible by 3 and 5
number: if it is not divisible by 3 or 5


# Example
    fizzBuzz(3) to return "fizz" 
    fizzBuzz(5) to return "buzz" 
    fizzBuzz(15) to return "fizz" 
    fizzBuzz(7) to return 7 
    filterArray([4, "z", "f", 5]) to return [4,5]
    filterArray(["$%^", 567, "&&&"]) to return [567]
# Challenge 3

Implement the function sumMix(arr) that given an array of integers as strings and numbers, returns the sum of the array values as if all were numbers.
# Example
    sumMix([9, 3, '7', '3']) to return 22
    sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) to return 42
    sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']) to return 41


# Challenge 4

Implement the function calculateGrade(marks) that takes an array of grades and calculates the average. It should return the average grade by comparing with the grade table
1-49: F
50-59: E
60-69: D
70-79: C
80-89: B
90-100: A
# Example
    calculateGrade([80, 80, 70]) to  return A
    calculateGrade([19, 5, 42, 2, 77]) to return 'F'
    calculateGrade([59, 80, 40, 2, 77]) to return 'E'
    calculateGrade([89, 50, 40, 90, 77]) to return 'D'
    
# Challenge 5

Implement the function filterList(arr) that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
# Example
    filterList([1,2,'a','b']) to return [1,2]
    filterList([1,'a','b',0,15]) to return [1,0,15]
    filterList([1,2,'aasf','1','123',123]) to return [1,2,123]