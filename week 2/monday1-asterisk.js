let rows1 = 5

// ========================================= //

for (let i = 1; i <= rows1; i++ ) {
  console.log('*');
}

console.log('\n');

console.log('=================================');

console.log('\n');

let rows2 = 5

// ========================================= //

let hole = ''
for (let i = 1; i <= rows2; i++) {
  for (let j = 1; j <= rows2; j++) {
    hole += '*'
  }
  hole += '\n'
}

console.log(hole);


console.log('\n');

console.log('=================================');

console.log('\n');

let rows3 = 5

// ========================================= //

let mole = ''

for (let i = 1; i <= rows3; i++) {
  for (let j = 1; j <= i; j++ ) {
    mole += '*'
  }
  mole += '\n'
}

console.log(mole);


console.log('\n');

console.log('=================================');

console.log('\n');

let rows4 = 5

// ========================================= //


let moe = ''

for (let i = rows4; i >= 1; i--) {
  for (let j = 1; j <= i; j++ ) {
    moe += '*'
  }
  moe += '\n'
}

console.log(moe);