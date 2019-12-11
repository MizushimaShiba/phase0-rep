function ladder(word) {
  //your code here
  let array = []

  for (let i = word.length -1; i >= 0; i--) 
  {
    let mole = []
    for (let j = 0; j <= i; j++)
    {
      mole.push(word[j])
    }
    array.push(mole)
  }
  return array
}

// DRIVER CODE
console.log(ladder('hacktiv8'));
// [
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v', '8' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i', 'v' ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]


console.log(ladder('corvette'));
