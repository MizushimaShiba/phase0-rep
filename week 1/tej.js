function angka(num) {
  let res = ''
  for (let i = 1; i <= num; i++) {
    let temp = ''
    for (let j = num; j >= 1; j--) {
      temp += j
    }
    temp += '\n'
    res += temp
  }
  return res
}

console.log(angka(3));
console.log(angka(5));


