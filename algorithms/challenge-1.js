function countTruthy(arr) {
let count = 0;
let value;
for (value of arr)
if (typeof(value) == "number" && value != 0){
count++; 
}
return count;
}
module.exports = countTruthy