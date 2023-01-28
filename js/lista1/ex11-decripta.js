const entrada = "@fcsb";
let mensagem = [];
let decriptada = "";
const chave = 1;

for (i = 0; i < entrada.length; i++) {
  if (entrada[i] == "$") {
    mensagem.push(90);
  } else if (entrada[i] == "@") {
    mensagem.push(122);
  } else {
    mensagem.push(parseInt(entrada[i].charCodeAt() - chave));
  }
}
for (i = 0; i < mensagem.length; i++) {
  decriptada += String.fromCharCode(mensagem[i]);
}
console.log(decriptada);
