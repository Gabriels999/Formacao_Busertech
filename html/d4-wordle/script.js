// Declaração de variáveis
let body = document.querySelector("body");
const palavra = "BOLAS";
let letters = 0;
let win = false;
let tries = 1;
let alphabet = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
let data = [];

// Busca as caixas no HTML.
function getElementField(row, id) {
  let el = document.querySelector(`#r${row}c${id}`);
  return el;
}
// Busca as teclas no HTML.
function getElementKeyboard(id) {
  let el = document.querySelector("#k" + id);
  return el;
}

// Funções de pintura
// Pinta as divs do tabuleiro
function paintsBoxes(row, indice, situation) {
  switch (situation) {
    case "correct":
      getElementField(row, indice).classList.add("correct");
      getElementField(row, indice).classList.remove("active");
      break;
    case "wrong_p":
      getElementField(row, indice).classList.add("wrong_p");
      getElementField(row, indice).classList.remove("active");
      break;
    default:
      getElementField(row, indice).classList.add("wrong");
      getElementField(row, indice).classList.remove("active");
      break;
  }
}

// Prepara a pintura de teclas do teclado
function paintsKeys(indice, situation) {
  switch (situation) {
    case "correct":
      getElementKeyboard(indice).classList.add("correct");
      break;
    case "wrong_p":
      getElementKeyboard(indice).classList.add("wrong_p");
      break;
    default:
      getElementKeyboard(indice).classList.add("wrong");
      break;
  }
}

// Pinta as teclas do teclado
function paintsKeyboard(indice) {
  for (let j = 0; j < alphabet.length; j++) {
    let aux = getElementKeyboard(j);
    if (aux.textContent == data[indice]) {
      if (palavra.includes(aux.textContent)) {
        if (palavra[indice] == aux.textContent) {
          paintsKeys(j, "correct");
        } else {
          paintsKeys(j, "wrong_p");
        }
      } else {
        paintsKeys(j, "wrong");
      }
    }
  }
}

// Corrige a tentativa do usuário.
function validaPalavra(row) {
  let count = 0;
  for (let i = 0; i < 5; i++) {
    if (data[i] == palavra[i]) {
      paintsBoxes(row, i, "correct");
      count++;
    } else if (palavra.includes(data[i])) {
      paintsBoxes(row, i, "wrong_p");
    } else {
      paintsBoxes(row, i, "wrong");
    }
    paintsKeyboard(i);
  }
  return count;
}

// Armazena e processa as entradas do usuário em uma lista
function recebeLetras(e) {
  console.log(e.key);
  if (alphabet.includes(e.key.toUpperCase())) {
    console.log(letters);
    data.push(e.key.toUpperCase());
    preencheCampo(data, tries);
    letters++;
  } else if (e.key == "Backspace") {
    letters--;
    esvaziaCampo(tries);
    data.splice(-1, 1);
  } else {
    console.log("Letra inválida");
  }
}

// Preenche as entradas do usuário no campo do jogo.
function preencheCampo(arr, row) {
  let actual = arr.length - 1;
  getElementField(row, actual).classList.add("active");
  return (getElementField(row, actual).textContent = arr[actual]);
}

// Apaga as entradas do usuário do campo e também
function esvaziaCampo(row) {
  getElementField(row, letters).classList.remove("active");
  return (getElementField(row, letters).textContent = "");
}

// Calcula o resultado da tentativa do usuário
function result() {
  if (data.length == 5) {
    if (validaPalavra(tries) == 5) {
      window.alert("Parabéns, você venceu!");
    } else {
      data = [];
      letters = 0;
      tries++;
      if (tries > 6) {
        window.alert("Você perdeu, te falta ódio.");
      }
    }
  }
}

// Função principal, lida com as entradas do usuário.
function main(e) {
  recebeLetras(e);
  console.log(data);
  result();
}

body.addEventListener("keydown", main);
