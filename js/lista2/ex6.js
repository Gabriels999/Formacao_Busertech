const entrada = [1, 150];

function criaRange(arr) {
  let resultado = [];
  for (i = arr[0]; i < arr[1] + 1; i++) {
    resultado.push(i);
  }
  return resultado;
}

console.log(criaRange(entrada));
