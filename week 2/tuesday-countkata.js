function hitungKata(text) {
  let count = 1

  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ') {
      count++
    }  
  }
  return count
}

console.log(hitungKata('I have a dream'));
console.log(hitungKata('I believe I can code'));
console.log(hitungKata('I'));

