function slice(data, start, end) {
  // Write your code here

  let result  = []
  
  for (let i = 0; i < data.length; i++) {
    if (start > data.length) {
      return result
    }
    if ( i >= start) {
      if (i < end) {
        result.push(data[i])
      } else if (!end) {
        result.push(data[i])
      }
    } else if (!start) {
      result.push(data[i])
    }
  }
 return result
}

//DRIVER CODE

console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)); // [ 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)); // [ 'camel', 'duck' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)); // [ 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])); //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)); //[]