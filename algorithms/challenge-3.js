function sumMix(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] == "string") {
      sum = sum + Number(arr[i]);
    } else if (typeof arr[i] == "number") {
      sum = sum + arr[i];
    }
  }
  return sum;
}
console.log(sumMix([9, 3, "7", "3"]));

  module.exports = sumMix