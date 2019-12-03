// Jika i ganjil j ganjil = o
// Jika i genap j genap = o
'use strict'

export function xoxo(num) {
  let mole = ''
  for (let i = 0; i < num; i++) {
    let hole = ''
    for (let j = 1; j < num - i; j++){
      hole += ' '
    }
    for (let j = 1; j <= (2 * i + 1); j++) {
      if (i % 2 == 0 && j % 2 == 0) {
        hole += 'o'
      } else if (i % 2 == 0 && j % 2 != 0){
        hole += 'x'
      } else if (i % 2 != 0 && j % 2 == 0){
        hole += 'o'
      } else if (i % 2 != 0 && j % 2 != 0){
        hole += 'x'
      }
    }
    hole += '\n'
    mole += hole
  }
  return mole
}

console.log(xoxo(5));
console.log(xoxo(6));
console.log(xoxo(7));
console.log(xoxo(8));
