function asterisk(num) {
  let mole = ''
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      mole += '*'
    }
    mole += '\n'
  }
  return mole

}

console.log(asterisk(5));
