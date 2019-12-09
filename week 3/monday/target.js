function targetTerdekat(arr) {
  // you can only write your code here!

  let counterO = 1
  let counterX = []
  let dekat = []

  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === 'o')
    {
      counterO = i
    }
  }
  
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] === 'x')
    {
      counterX.push(i)
    }
  }

  if (counterX.length === 0)
  {
    return 0
  }
  else
  {
    for (let i = 0; i < counterX.length; i++)
    {
      dekat.push(Math.abs(counterO - counterX[i]))
    }
    dekat = Math.min.apply(null, dekat)
    return dekat
  }

}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2