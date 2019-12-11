function banding(angka1, angka2) {

  
  if (angka2 > angka1) {
    return true
  } else if (angka1 > angka2) {
    return false
  } else {
    return -1
  }

}

console.log(banding(5, 3)); //false
console.log(banding(3, 2)); //false
console.log(banding(4, 7)); //true
console.log(banding(5, 5)); // -1
