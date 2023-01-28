const entrada = [1, 1, 40];

function somaArray(arr) {
  let total = 0;
  for (i of arr) {
    total += i;
  }
  return total;
}

console.log(somaArray(entrada));
