function countTruthy(arr) {
    let count = 0;
    for (let item of arr) {
        if (item)
            count++;
       }
    return count;
    }


module.exports = countTruthy