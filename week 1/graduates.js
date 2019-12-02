function graduates(nama, nilai, absensi) {
  if (nilai >= 70 && absensi <= 5) {
    return `Saudara ${nama}, anda lulus`
  } else {
    return `Saudara ${nama}, anda tidak lulus`
  }

}

console.log(graduates('Grey', 84, 0));
console.log(graduates('Gruddle', 72, 0));
console.log(graduates('Cray', 91, 10));
console.log(graduates('Heee', 60, 2));
