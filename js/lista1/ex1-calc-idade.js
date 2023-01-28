// Versão com variáveis
const anoDeNascimento = 1997;
let idade = 2022 - anoDeNascimento;
console.log(`Quem nasceu em ${anoDeNascimento} faz ${idade} anos em 2022`);

// Versão com funções
function retornaIdade(anoNascimento) {
  let anoAtual = new Date().getFullYear();
  return console.log(anoAtual - parseInt(anoNascimento));
}

retornaIdade(1997);
