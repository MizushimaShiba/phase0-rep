function xoxo(text) {
  let x = 0
  let o = 0
  for (let i = 0; i < text.length; i++) {
    if (text[i] === 'x') {
      x++
    } else {
      o++
    }
  }

  if (x == o) {
    return true
  } else {
    return false
  }

}

console.log(xoxo('xoxoxo'));
console.log(xoxo('oxooxox'));
console.log(xoxo('oxooox'));
console.log(xoxo('xoxoxoxo'));


