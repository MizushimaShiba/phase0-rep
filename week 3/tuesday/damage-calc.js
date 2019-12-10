function attack (damage) {
  // Code disini
  
  function damaging(x)
  {
    return x- 2

  }

  return damaging(damage)
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini

  return attack(damagePerAttack) * numberOfAttacks
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90