// Initiate the Loop
for (let i = 1; i <= 20; i++) {
  // IF the total shirt is 20
  if (i == 20) {
    // THEN print all the shirts are inside and Foxie can start the machine
    console.log(`Pakaian ke-${i} sudah masuk. Menyalakan Mesin cuci`)
    // IF the shirts are less than 20 inside the machine
  } else {
    // Print how many shirts are inside
    console.log(`Memasukkan pakaian. Pakaian ke-${i} sudah masuk`);
  }
}