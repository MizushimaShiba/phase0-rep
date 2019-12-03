// CARI NEIGHBOR TERDEKAT UNTUK MASING-MASING STRING

function findNeighbor(arr){
  // tulis kodemu disini

  let result = {}


  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'string') {
        result[arr[i][j]] = []
        for (let x = - 1; x >= 1 && i >= 0; i++ ) {
          for (let y = - 1; y >= 1 && j >= 0; j++ ) {
            result[arr[i][j]]
          }
        }
        
      }
    }
  }

  return result

}

console.log(findNeighbor([
  [456, 871, 670, 122],
  [980, "A", 780, 231],
  [564, 671, 984, 776],
  [100, 203, "B", 156]
]));




/* OUTPUT:
{
  A: [456, 871, 670, 980, 780, 564, 671, 984],
  B: [671, 984, 776, 203, 156]
}
*/


// console.log(findNeighbor([
//   [456, 871, 670, "X"],
//   [980, 564, 780, 231],
//   ["Y", 671, "Z", 776],
//   [100, 203, 122, 156]
// ]));


/* OUTPUT:
{
  X: [670, 780, 231],
  Y: [980, 564, 671, 100, 203],
  Z: [564, 780, 231, 671, 776, 203, 122, 156]
}
*/

// console.log(findNeighbor([
//   ["I", 871, 670, "J"],
//   [980, 564, 780, 231],
//   [456, 671, 980, 776],
//   [100, 203, 122, "K"]
// ]));


/* OUTPUT:
{ 
  I: [ 871, 980, 564 ],
  J: [ 670, 780, 231 ],
  K: [ 980, 776, 122 ] 
}
*/