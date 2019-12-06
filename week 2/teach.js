let value = 0
if (value === 0) {
  console.log(`invalid data`)
  break
}

if(typeof value === 'number' ) {
  console.log(`age ${value}`)
} else if (typeof value === 'string') {
  console.log(`username ${value}`)
} else if (typeof value === 'boolean') {
  console.log(value ? 'thank you for agreeing' : 'cannot proceed without agreement')
}