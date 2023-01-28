const entrada = "Zebra";
let mensagem = [];
let encriptada = "";
const chave = 1;

for (i = 0; i < entrada.length; i++) {
  if (entrada[i] === "z") {
    mensagem.push(64);
  } else if (entrada[i] === "Z") {
    mensagem.push(36);
  } else {
    mensagem.push(parseInt(entrada[i].charCodeAt() + chave));
  }
}
for (i = 0; i < mensagem.length; i++) {
  encriptada += String.fromCharCode(mensagem[i]);
}

console.log(encriptada);
