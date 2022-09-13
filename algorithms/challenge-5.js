function filterList(arr) {
    let result = []
    for(let num of arr){
        if(typeof(num)==="number"){
            result.push(num)
        }
    }
    return result
}
console.log(filterList([1,2,'a','b']))
console.log(filterList([1,'a','b',0,15]))
console.log(filterList([1,2,'aasf','1','123',123]))

  module.exports =filterList