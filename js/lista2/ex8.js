const entrada = [1, 2, 3, 4, 5, 6, 7];

function imparPar(arr) {
  let impar = 0;
  let par = 0;
  for (i of arr) {
    if (i % 2 == 0) {
      par++;
    } else {
      impar++;
    }
  }
  console.log(`Ímpares: ${impar} \nPares: ${par}`);
}

imparPar(entrada);
