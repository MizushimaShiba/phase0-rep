// Declare the variable and also assign the value
let gacha = Math.floor(Math.random() * 5) + 1 // Randomized the output
let coupon = 0


// BEGIN Switch using gacha keys
switch (gacha) {
  // CASE gacha 1
  case 1:
    // PRINT try again 
    console.log(`coba lagi ya`)
    // BREAK the switch
    break;
  // CASE gacha 2
  case 2:
    // PRINT that you get 5 coupons
    console.log(`selamat kamu mendapatkan kupon sebanyak 5`)
    // Add coupon by 5
    coupon += 5
    // PRINT how much coupon you get
    console.log(`jumlah kupon adalah ${coupon}`);
    // BREAK the switch
    break;
  // CASE 3
  case 3:
    // PRINT that you get 15 coupons
    console.log(`selamat kamu mendapatkan kupon sebanyak 15`)
    // Add coupons by 15
    coupon += 15
    // PRINT how much coupon you get
    console.log(`jumlah kupon adalah ${coupon}`);
    // BREAK the switch
    break;
  // CASE gacha 4
  case 4:
    // PRINT that you get 50 coupons
    console.log(`selamat kamu mendapatkan kupon sebanyak 50`)
    // Add coupons by 50
    coupon += 50
    // PRINT how much coupon you get
    console.log(`jumlah kupon adalah ${coupon}`);
    // BREAK the switch
    break;
  // CASE gacha 5
  case 5:
    // PRINT that you get jackpot and win 100 coupons
    console.log(`WOW, kamu menang jackpot! Selamat!!`)
    // Add coupons by 100
    coupon += 100
    // PRINT how much you get coupons
    console.log(`jumlah kupon adalah ${coupon}`);
    // BREAK the switch
    break;
    // IF there is no input
  default:
    // PRINT that there is no input
    console.log(`Nomor tidak diketahui.`)
    // BREAK the switch
    break;
}