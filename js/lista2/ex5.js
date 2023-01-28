const entrada = [40, 42, 1, 0, -10];

function segundoMaiorNumero(arr) {
  let maior = arr[0];
  let segMaior = maior;
  for (i of arr) {
    if (i > maior) {
      segMaior = maior;
      maior = i;
    }
  }
  return segMaior;
}

console.log(segundoMaiorNumero(entrada));
