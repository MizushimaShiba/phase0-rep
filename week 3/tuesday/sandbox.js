function recursive(data)
{
  if (data.length === 0)
  {
    return 0
  }
  else 
  {
    let mole = 0
    return recursive(data)
  }
}


console.log(recursive([1,2,4,5,7,2]));
