function countTruthy(arr) {
  let truthyValues = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      truthyValues.push(arr[i]);
    }
  }
  return truthyValues.length;
}

countTruthy([6, 3, 0, 30, 7]);
countTruthy(['', 3, 0, 30, 7]);
countTruthy(['', 0, 0, undefined, 7]);

module.exports = countTruthy;
