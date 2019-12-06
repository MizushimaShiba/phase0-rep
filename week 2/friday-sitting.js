function sittingArrangement(person, column) {
  // Write your code here
  let result  = []

  if (column == 0) {
    return `Invalid number`
  }

  for (let i = 0; i < Math.ceil(person.length/column); i++)
  {
    let bangku = []
    for (let j = 0; j < column; j++)
    {
      bangku.push(person[(column*i)+j])
    }
    result.push(bangku)
  }

  return result
}

//DRIVER CODE

console.log(sittingArrangement(['A', 'B', 'C'], 0 )); //Invalid number
console.log(sittingArrangement([ 'Juli', 'Nisa', 'Desi', 'Ulfa', 'Puji' ], 2)); //[ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
console.log(sittingArrangement([ 'Yosia', 'Asrawi', 'Andru' ], 3)); //[ [ 'Yosia', 'Asrawi', 'Andru' ] ]
console.log(sittingArrangement([ 'Lukman', 'Adam', 'Dimas', 'Hansin', 'Orion' ], 4));
// [
//   [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
//   [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
// ]