function smol(val) {
  let add = 0
  for (let i = 1; i <= val; i++){
    add += i
  }
  return add
}

console.log(smol(5));
console.log(smol(100));
console.log(smol(127));


