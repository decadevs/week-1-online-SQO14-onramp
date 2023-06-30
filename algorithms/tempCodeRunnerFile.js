function filterList(arr) {
    let alphabets = 'abcdefgijklmnopqrstuvwxyz';
    let list = [];
    for(i = 0; i < arr.length; i++){
        if(!typeof arr[i] == 'string'){
            list.push(arr[i])
        }
    }return list
 }

  module.exports =filterList