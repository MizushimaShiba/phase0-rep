function asterisk(num) {
  let mole = ''
  for (let i = 0; i < num; i++) {
    let hole = ''
    for (let j = 1; j < num-i; j++ ) {
      hole += '*'
    }
    for (let j = i; j > 1; j--) {
      hole += ' '
    }
    hole += '\n'
    mole += hole
  }
  return mole
  
}

console.log(asterisk(5));
console.log(asterisk(10));
