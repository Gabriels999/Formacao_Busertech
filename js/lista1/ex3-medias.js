const notas = [1, 6, 5, 10];

// Versão com variáveis
let somaNotas = 0;
for (valor of notas) {
  somaNotas += valor;
}
const mediaAluno = somaNotas / notas.length;
console.log(mediaAluno);
