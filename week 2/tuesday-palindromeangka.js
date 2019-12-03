function palindromeAngka(value) {
  'use strict'
  
  value += 1;
    if ( value >= 0 && value<=9 ) {
        return value;
    }
    else {
        while ( true ) {
            let save = value;
            let newNum = 0;
            while ( save != 0 ){
                newNum = ( newNum * 10 ) + ( save%10 )
                save = Math.trunc( save / 10 )
            }
            if (newNum === value) {
                break;
            }
            value++;
        }
        return value;
    }
}

console.log(palindromeAngka(10));
console.log(palindromeAngka(175));
console.log(palindromeAngka(92));
console.log(palindromeAngka(181));
console.log(palindromeAngka(120));

