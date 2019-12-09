function tentukanDeretGeometri(arr) {
  // you can only write your code here!

  // i+1 / i === i+2 / i+1
  let bagi = []

  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i+1] !== undefined)
    {
      bagi[i] = arr[i+1] / arr[i]
    }
  }


  let soms = 0

  for (let i = 0; i < bagi.length; i++)
  {
    soms += bagi[i]
  }

  if (soms / bagi.length !== bagi[0])
  {
    return false
  }
  else
  {
    return true
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false