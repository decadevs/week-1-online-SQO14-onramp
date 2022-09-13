function filterList(arr) {
   let narr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "string") {
      narr.push(arr[i]);
    }
  }
  return narr;
}
console.log(filterList([1, 2, "a", "b"]));
  module.exports =filterList