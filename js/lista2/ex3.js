const entrada = [1, 3, 5, 7, 8, 10];

function mediaLista(arr) {
  let media = 0;
  for (i of arr) {
    media += i;
  }
  const resultado = media / arr.length;
  return resultado.toFixed(1);
}

console.log(mediaLista(entrada));
