const entrada = 4;

function tabuada(n) {
  if (n < 11 && n > 0) {
    for (let i = 1; i < 11; i++) {
      console.log(`${n} X ${i} = ${n * i}`);
    }
  } else {
    console.log("Entrada inválida.");
  }
}

console.log(tabuada(entrada));
