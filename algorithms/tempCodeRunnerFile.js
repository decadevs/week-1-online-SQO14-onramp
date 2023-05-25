function countTruthy(arr) {
    let count = 0
    for (let i=0; i < arr.length; i++){
           if (i > 0 || typeof(i)== "number"){
            count++
           }
    }
    return count
}

module.exports = countTruthy