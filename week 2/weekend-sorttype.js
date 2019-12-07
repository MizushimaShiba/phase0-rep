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

// console.log(sorting([ 2, 4, 6, 8, 2, 3 ])); //[ 2, 2, 3, 4, 6, 8 ]


function sortingByType(array) {
  // your code here

  let number = []
  let bool = []
  let string = []

  let result = []
  
  for (let i = 0; i < array.length; i++)
  {
    if (typeof array[i] === 'number')
    {
      number.push(array[i])
    } 
    else if (typeof array[i] === 'string')
    {
      string.push(array[i])
    }
    else if (typeof array[i] === 'boolean')
    {
      bool.push(array[i])
    } 
  }

  result.push(number)
  result.push(string)
  result.push(bool)

  result[0].sort()
  result[2].sort()

  return result
}

// console.log(sortingByType([ 1, 3, 'array', -45, true, false, 'big' ]));
// [ [ -45, 1, 3 ], [ 'array', 'big' ], [ false, true ] ]

function sortAllClean(array) {
  //your code here
  let result = []
  let reee = []

  for (let i = 0; i < array.length; i++)
  {
    if (array[i] === null || array[i] === undefined  ||typeof array[i] === 'object')
    {
      reee.push(array[i])
    }
    else if (isNaN(array[i]) === true)
    {
      if (typeof array[i] === 'string')
      {
        result.push(array[i])
      }
      else
      {
        reee.push(array[i])
      }
    }
    else
    {
      result.push(array[i])
    }
  }

  let number = []
  let bool = []
  let string = []

  let hasil = []
  
  if (result.length === 0)
  {
    return []
  }
  else
  {
    for (let i = 0; i < result.length; i++)
  {
    if (typeof result[i] === 'number')
    {
      number.push(result[i])
    } 
    else if (typeof result[i] === 'string')
    {
      string.push(result[i])
    }
    else if (typeof result[i] === 'boolean')
    {
      bool.push(result[i])
    } 
  }
  }

  hasil.push(number)
  hasil.push(string)
  hasil.push(bool)

  hasil[0].sort()
  hasil[2].sort()

  return hasil
}

console.log(sortAllClean([ undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]));
//[ [ 123, 456 ], [ 'bcd', 'def' ], [ false, true ] ]

console.log(sortAllClean([ NaN, undefined ])); // []