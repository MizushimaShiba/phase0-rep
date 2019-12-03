function ganjilGenap(plat) {
  // your code here

  let array = []
  let string = ''

  for (let i = 0; i < plat.length; i++) {
    string += plat[i]
    if (plat[i] === ';' ) {
      array.push(string)
      string = ''
    }
  }
  array.push(string)

  return array
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
// console.log(ganjilGenap('')) //plat tidak ditemukan
// console.log(ganjilGenap()) //invalid data