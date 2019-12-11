function menit(num) {
  let hour = 0
  let minute = 0
  
  if (num < 60) {
    return `${hour}:${num}`
  }
  for (let i = 0; i <= num; i++){
    if (i === 60) {
      hour++
      minute = num % 60
      if (minute < 10) {
       minute =  ("0" + minute).slice(-2)
      }
    } else if (i === 120) {
      hour++
      minute = num % 60
      if (minute < 10) {
       minute =  ("0" + minute).slice(-2)
      }
    }
  }
  
  return `${hour}:${minute}`
}


console.log(menit(88));
console.log(menit(44));
console.log(menit(61));
console.log(menit(128));


