function divisors(integer) {
  let result = []
    for (let i = 2; i < integer; i++) {
      if (integer % i == 0) {
      result.push(i)
      }
    }
  if (result == []) {
    return `${integer} is prime`
  }
    return result
};



// console.log(divisors(15));
// console.log(divisors(12));
console.log(divisors(13));


