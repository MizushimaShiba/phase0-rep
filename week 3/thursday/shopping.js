function shoppingTime(memberId, money) {
  // you can only write your code here!
  const sepatu = 1500000
  const bajuZoro = 500000
  const bajuHN = 250000
  const sweater = 175000
  const casing = 50000

  let result = {}
  let arrayResult = []

  if (!memberId && !money)
  {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  if (memberId !== '')
  {
    if (money > 50000)
    {
      result['memberId']= memberId
      result['money'] = money
      result['listPurchased'] = []
      if (money > sepatu)
      {
        result['listPurchased'].push('Sepatu Stacattu')
        money -= sepatu
      }
      if (money > bajuZoro)
      {
        result['listPurchased'].push('Baju Zoro')
        money -= bajuZoro
      }
      if (money > bajuHN)
      {
        result['listPurchased'].push('Baju H&N')
        money -= bajuHN
      }
      if (money > sweater)
      {
        result['listPurchased'].push('Sweater Uniklooh')
        money -= sweater
      }
      if (money >= casing)
      {
        result['listPurchased'].push('Casing Handphone')
        money -= casing
      }
      result['changeMoney'] = money
      
    }
    else
    {
      return 'Mohon maaf, uang tidak cukup'
    }
  }
  else
  {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  }

  return result
}


// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja