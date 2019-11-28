// declare and assigning value inside variable
let nama = 'hello'
let nilai = 55


// IF nilai is 0 OR nilai is bigger than or equal to 34
if (nilai == 0 || nilai <= 34) {
  // DISPLAY grade E
   console.log(`${nama}, grade anda saat ini adalah E. Silahkan mengulang`)
  // ELSE IF nilai is 35 OR nilai is bigger than or equal to 49
} else if (nilai == 35 || nilai <= 49) {
  // DISPLAY grade D
   console.log(`${nama}, grade anda saat ini adalah D. Silahkan mengulang`)
// ELSE IF nilai is 50 OR nilai is bigger than or equal to 64
} else if (nilai == 50 || nilai <= 64) {
  // DISPLAY grade C
   console.log(`${nama}, grade anda saat ini adalah C.`)
// IF nilai is 65 OR nilai is bigger than or equal to 79
} else if (nilai == 65 || nilai <= 79) {
  // DISPLAY grade B
   console.log(`${nama}, grade anda saat ini adalah B.`)
// IF nilai is 80 OR nilai is bigger than or equal to 100
} else if (nilai == 80 || nilai <= 100) {
  // DISPLAY grade A
   console.log(`${nama}, grade anda saat ini adalah A. Good job`)
}
