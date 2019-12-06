function sorting(array) {
  // your code here
  let len = array.length;

  for (let i = 0; i < len; i++)
  {
    for (let j = 0; j < len; j++)
    {
      if (array[j] > array[j + 1])
      {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}

console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]


function sortingByType(array) {
  // your code here
  
}

console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]