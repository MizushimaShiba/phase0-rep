function tukarBesarKecil(kalimat) {
  // you can only write your code here!
  let alphaca = 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-!'
  let result = []

  for (let i = 0; i < kalimat.length; i++)
  {
    for (let j = 0; j < alphaca.length; j++)
    {
      if (kalimat[i] === alphaca[j])
      {
        result.push(j)
      }
    }
  }

  let hasil = ''

  for (let i = 0; i < result.length; i++)
  {
    if (result[i] === 26 )
    {
      hasil += ' '
    }
    else if (result[i] >= 0 && result[i] <= 25 )
    {
      hasil += alphaca[result[i] + 27]
    }
    else if (result[i] >= 27 && result[i] <= 52 )
    {
      hasil += alphaca[result[i] - 27]
    }
    else
    {
      hasil += alphaca[result[i]]
    }
  }
  return hasil
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"