function data(value) {

  if (value === 0) {
    return `invalid data`
  }

  if(typeof value === 'number') {
    return `age ${value}`
  } else if (typeof value === 'string') {
    return `username ${value}`
  } else if (typeof value === 'boolean') {
    return (value ? 'thank you for agreeing' : 'cannot proceed without agreement')
  }

}

console.log(data('Stefani')); // username Stefani
console.log(data(25)); // age 25
console.log(data(0)); // invalid data
console.log(data('0')); // username 0
console.log(data(false)); // 'cannot proceed without agreement'




