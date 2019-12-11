function flip(txt) {
  let temp = '' 

  for (let i = txt.length-1; i >= 0; i--) {
    temp += txt[i]
  }
  return temp

}


console.log(flip('Javascript'))
console.log(flip('Good Deed'))
console.log(flip('DeD'))
console.log(flip('Broke'))
