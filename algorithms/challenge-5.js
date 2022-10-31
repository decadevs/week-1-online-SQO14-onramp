function filterList(arr) {
  let newList = new Array();
    arr.forEach(value => {
        if(typeof(value)== "number"){
            newList.push(value)

        }
        else{
            return null;
        }

    });
    return newList;

 }


  module.exports =filterList