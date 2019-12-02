// Declare variable and assign value
let nama = 'Eva'
let umur = 20
let anggur = 300000
let juice = 50000

// IF nama is ''
if (nama != '') {
  // IF the age is less than 17
  if (umur > 17) {
    // IF the money is bigger than the wine
    if (uang > anggur) {
      // Money is subtracted by the wine price
      uang -= anggur
      // Display the name and the change
      console.log(`Hello ${nama}, anda bisa memesan minuman. Sisa uang saat ini adalah ${uang}`)
      // IF the money is less than the wine price
    } else {
      // Display that his/her money is less enough
      console.log(`Uangmu kurang. Pulanglah`)
    }
    // IF there is a kid entering the bar and already ordering a drink
  } else {
    // Money is subtracted by the Juice price
    uang -= juice
    // Display the kid's name and the change
    console.log(`Hello ${nama}, kamu memesan Juice dengan harga ${juice}. Sisa uang saat ini adalah ${uang}`)
  }
  // If he/she forget his/her name
} else {
  // Display that he/she has no name
  console.log(`Namamu mana? Ga boleh masuk!`)
}