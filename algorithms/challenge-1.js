function countTruthy(arr) {
    let count = 0;
    for(let a of arr){
      if(a){
      count ++;
      }
    return count;
  }
}
module.exports = countTruthy
