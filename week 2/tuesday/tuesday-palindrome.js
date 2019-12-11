function palindrome(text) {
  let swap = ''

  for (let i = text.length-1; i >= 0; i--) {
    swap += text[i]
  }
  if (swap === text){
    return true
  } else {
    return false
  }
}

console.log(palindrome('katak'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('makan'));


