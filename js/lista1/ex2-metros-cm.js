// Versão com variáveis
const metros = 1;
let cm = metros * 100;
console.log(`${metros} metros em centímetros = ${cm}`);

// Versão com funções
function converteParaCm(metros) {
  let cm = metros * 100;
  return cm;
}

resultado = converteParaCm(1);
console.log(resultado);
