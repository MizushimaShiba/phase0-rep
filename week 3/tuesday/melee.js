function splitting(str) {
  //your code here
  let result = []
  let string = ''

  for (let i = 0; i < str.length; i++)
  {
    if (str[i] !== '-' && str[i] !== ',')
    {
      string += str[i]
    }
    else if (str[i] === '-' && str[i+1] === 'R' )
    {
      result.push(string)
      result.push('Ranged')
      string = ''
      i += 7
    }
    else if (str[i] === '-' && str[i+1] === 'M' )
    {
      result.push(string)
      result.push('Melee')
      string = ''
      i += 6
    }
  }

  return result
  
}

function meleeRangedGrouping (str) {
  //your code here

  let split = splitting(str)
  let result = []
  let ranged = []
  let melee = []
  

  for (let i = 0; i < split.length; i++)
  {
    if (i % 2 !== 0 && split[i] === 'Ranged')
    {
      ranged.push(split[i-1])
    }
    else if (i % 2 !== 0 && split[i] === 'Melee')
    {
      melee.push(split[i-1])
    }
  }

  result.push(ranged, melee)

  return result
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping('')); // []