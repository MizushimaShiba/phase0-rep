function urutkanAbjad(str) {
  // you can only write your code here!
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = []

  for (let i = 0; i < str.length; i++)
  {
    for (let j = 0; j < alphabet.length; j++)
    {
      if (str[i] === alphabet[j])
      {
        index.push(j)
      }
    }
  }

  let len = index.length;

  for (let i = 0; i < len; i++)
  {
    for (let j = 0; j < len; j++)
    {
      if (index[j] > index[j + 1])
      {
        let tmp = index[j];
        index[j] = index[j + 1];
        index[j + 1] = tmp;
      }
    }
  }

  let result = ''

  for (let i = 0; i < index.length; i++)
  {
    result += alphabet[index[i]]
  }

  return result
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'