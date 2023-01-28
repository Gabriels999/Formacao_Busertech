const entrada = [1, 3, 5, 7, 8, 10, 3];

function maiorNumero(arr) {
  let maior = arr[0];
  for (i of arr) {
    if (i > maior) {
      maior = i;
    }
  }
  return maior;
}

console.log(maiorNumero(entrada));
