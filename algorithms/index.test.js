const countTruthy = require('./challenge-1')
const fizzBuzz = require('./challenge-2')
const sumMix = require('./challenge-3')
const calculateGrade = require('./challenge-4')
const filterList = require('./challenge-5')

// describe('Challenge 1 Tests', () => {
//   test('basic tests', () => {
//     expect(countTruthy([6, 3, 0, 30, 7])).toBe(4)
//     expect(countTruthy(['', 3, 0, 30, 7])).toBe(3)
//     expect(countTruthy(['', 0, 0, undefined, 7])).toBe(1)
//     expect(countTruthy([16, 33, 3, 2])).toBe(4)
//     expect(countTruthy([16, 33, null, 2])).toBe(3)

//   })
// })

// describe('Challenge 2 Tests', () => {
//   test('basic tests', () => {
//     expect(fizzBuzz(3)).toBe("fizz")
//     expect(fizzBuzz(9)).toBe("fizz")
//     expect(fizzBuzz(5)).toBe("buzz")
//     expect(fizzBuzz(25)).toBe("buzz")
//     expect(fizzBuzz(15)).toBe("fizzBuzz")
//     expect(fizzBuzz(7)).toBe(7)   
   
//   })
// })

// describe('Challenge 3 Tests', () => {
//   test('basic tests', () => {
//     expect(sumMix([9, 3, '7', '3'])).toStrictEqual(22)
//     expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toStrictEqual(42)
//     expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])).toStrictEqual(41)
//     expect(sumMix([1, '5', 6, 7])).toStrictEqual(19)
//     expect(
//       sumMix([10, 60, '80', 10])
//     ).toStrictEqual(160)
//     expect(sumMix(['1', 2, 3, '9', 10])).toStrictEqual(25)
//     expect(sumMix(['5', 6, '7'])).toStrictEqual(18)
//   })
// })

describe('Challenge 4 Tests', () => {
  test('basic tests', () => {
    expect(calculateGrade([19, 5, 42, 2, 77])).toBe('F')
    expect(calculateGrade([59, 80, 40, 2, 77])).toBe('E')
    expect(calculateGrade([89, 50, 40, 90, 77])).toBe('D')
    expect(calculateGrade([59, 75, 82, 77])).toBe('C')
    expect(calculateGrade([80, 80, 80])).toBe('B')
    expect(calculateGrade([90, 90, 97])).toBe('A')
  
  })
})


// describe('Challenge 5 Tests', () => {
//     test('basic tests', () => {
//         expect(filterList([1,2,'a','b'])).toEqual([1,2])
//         expect(filterList([1,'a','b',0,15])).toEqual([1,0,15])
//         expect(filterList([1,2,'aasf','1','123',123])).toEqual([1,2,123])
//         expect(filterList(['wk', 4, 5, 6, 'yl', 'to' ])).toEqual([4,5,6])
//         expect(filterList([3, "Pop", 8, 9, 7,"learn" ])).toEqual([3, 8, 9,7])
//         expect(filterList(["t", 9]) ).toEqual([9])

//       })
// })