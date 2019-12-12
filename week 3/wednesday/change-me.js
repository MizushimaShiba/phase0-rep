function changeMe(arr) {
  // you can only write your code here!
  let name = ''

  if (arr.length == 0)
  {
    return 'none'
  }
  
  let result = {}
  for (let i = 0; i < arr.length; i++)
  {
    name = `${i+1}. ${arr[i][0]} ${arr[i][1]} :`
    result.firstName = arr[i][0]
    result.lastName = arr[i][1]
    result.gender = arr[i][2]
    result.age = arr[i][3] === undefined  && arr[i][3] >=2017 ? (2017 - arr[i][3]) : `Invalid birth year`
    console.log(`${name}`);
    console.log(result);
    
  }

  
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
// changeMe([]); // ""