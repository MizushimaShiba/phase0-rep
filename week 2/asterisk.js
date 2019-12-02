function asterisk(num) {
  let mole = ''
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++ ) {
      mole += '*'
    }
    for (let j = num; j > 0; j--) {
      mole += ''
      console.log(mole);
      
    }
    mole += '\n'
  }
  return mole
  
}

console.log(asterisk(5));
