// let angka = 641573  //73
let angka = 12783456 //83
// let angka = 910233 //91
// let angka = 79918293 //99

let number = angka

let huruf = String(number)
let mole = ''
  
for (let i = 0; i < huruf.length; i++) {
  if (mole === null) {
    mole += huruf[0] + huruf[1]
  } else if (mole != null) {
    let hole = huruf[i] + huruf[i+1]
    if (Number(mole) < Number(hole)){
      mole = Number(hole) 
    }
  }
}  
console.log(mole);
  

