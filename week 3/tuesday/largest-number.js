function sorting(arrNumber) {
  // code di sini
  // kamu bisa mengggunakan function sorting yang sudah kamu buat saat weekend

  let len = arrNumber.length;

  for (let i = 0; i < len; i++)
  {
    for (let j = 0; j < len; j++)
    {
      if (arrNumber[j] > arrNumber[j + 1])
      {
        let tmp = arrNumber[j];
        arrNumber[j] = arrNumber[j + 1];
        arrNumber[j + 1] = tmp;
      }
    }
  }

  return arrNumber
}

function getTotal(arrNumber) {
  // code di sini
  let counter = 0

  for (let i = 0; i < arrNumber.length; i++)
  {
    // console.log(arrNumber[i])
    if (arrNumber[i] === arrNumber[arrNumber.length - 1] )
    {
      counter ++
    }
  }

  return arrNumber.length === 0 ? `` : `angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${counter} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
console.log(mostFrequentLargestNumbers([144, 111, 121, 121, 133, 131, 133, 112]));
console.log(mostFrequentLargestNumbers([122, 122, 122, 122, 121, 111, 155, 155]));
console.log(mostFrequentLargestNumbers([100, 200, 333, 333, 443, 333, 222, 111]));

