function antri(line, person) 
{
  return line.push(person)
}

function antrishi(line, person)
{
  return line.shift(person)
}

function unantri(line, person)
{
  return line.unshift(person)
}


console.log(antri([], 'hey;hello;how'));
console.log(antri([], 'can;cannot;cant'));
console.log(antri([], 'okay;oke;ok;OK;kay'));



function ganjilGenap(plat) {
  // your code here

  if (plat === '')
  {
    return `Plat tidak ditemukan`
  } 
  else if (!plat)
  {
    return `Invalid`
  }

  let array = []
  let string = ''

  for (let i = 0; i <= plat.length; i++)
  {
    if (plat[i] === ';' || i == plat.length)
    {
      array.push(string)
      string = ''
    } 
    else
    {
      string += plat[i]
    }
  }

  let ganjil = 0
  let genap = 0

  for (let i = 0; i < array.length; i++)
  {
    if (Number(array[i]) % 2 === 0) 
    {
      genap++
    }
    else
    {
      ganjil++
    }
  }
  
  if (ganjil === 0)
  {
    return `plat genap sebanyak ${genap} dan plat ganjil tidak ditemukan`
  } 
  else if (genap === 0)
  {
    return `plat ganjil sebanyak ${ganjil} dan plat genap tidak ditemukan`
  }
  else
  {
    return `plat genap sebanyak ${genap} dan plat ganjil sebanyak ${ganjil}`
  }
  

}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data


