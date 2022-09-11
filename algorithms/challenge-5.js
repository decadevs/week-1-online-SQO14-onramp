function filterList(arr) {
  let newFilterList = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      newFilterList.push(arr[i]);
    }
  }

  return newFilterList;
}

filterList([1, 2, 'a', 'b']);
filterList([1, 'a', 'b', 0, 15]);
filterList([1, 2, 'aasf', '1', '123', 123]);
filterList(['wk', 4, 5, 6, 'yl', 'to']);
filterList([3, 'Pop', 8, 9, 7, 'learn']);
filterList(['t', 9]);

module.exports = filterList;
