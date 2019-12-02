function pyramid(n) {
  let mole = ''
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j < n-i; j++) {
      str = str + ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
      str = str + '*';
    }
    str += '\n'
    mole += str
  }
  return mole
}



console.log(pyramid(5));
console.log(pyramid(7));
// console.log(pyramid(15));
// console.log(pyramid(17));


