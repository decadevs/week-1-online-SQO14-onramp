function filterList(arr) {
    let i = 0

    const array = arr;
    const newArr = array.filter((arr) => typeof(arr) === 'number')
    return newArr;
}

 console.log(filterList([1,2,'a','b']))
 console.log(filterList([1,'a','b',0,15]))
 console.log(filterList([1,2,'aasf','1','123',123]))
 
 module.exports = filterList

//  function filterList(arr) {
//     let i = 0
//     let newArr = [];
    
//     for (i = 0; i < arr.length; i++) {
//           if (typeof(arr[i]) === 'number') {
//              newArr.push(arr[i]);
//              } 
//        }
//         return newArr
//        }
    
//     console.log(filterList([1,2,'a','b']))
//  console.log(filterList([1,'a','b',0,15]))
//  console.log(filterList([1,2,'aasf','1','123',123]))
//  module.exports = filterList
 