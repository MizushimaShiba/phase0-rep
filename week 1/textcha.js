
let text = 'i love javascript'
let result = ''

  for (let i = 0; i < text.length; i++) {
    if (text[i] == 'a' || text[i] == 'i'|| text[i] == 'u' || text[i] == 'e' || text[i] == 'o' ) {
      result += '$'
    } else {
      result += text[i]
    }
    
  }
console.log(result);
