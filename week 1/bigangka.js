function angkabesar(number) {
  let huruf = String(number)
  let mole = ''
  
  for (let i = 0; i < huruf.length; i++) {
    if (!mole) {
      mole += huruf[0] + huruf[1]
    } else if (mole != null) {
      let hole = huruf[i] + huruf[i+1]
      if (Number(mole) < Number(hole)){
        mole = Number(hole) 
      }
    }
  }  
  return mole

}


console.log(angkabesar(641573)); // 73
console.log(angkabesar(12783456)); // 83
console.log(angkabesar(910233)); // 91
console.log(angkabesar(79918293)); // 99
