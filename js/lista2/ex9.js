let diaAtual = new Date().getDate();
let mesAtual = new Date().getMonth();

function diaSemana(numero) {
  const dias = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ];
  return dias[numero];
}

function escalaErick(dia, mes) {
  for (i = mes; i <= 12; i++) {
    for (j = dia; j < 30; j += 6) {
      const diaDaSemana = new Date(2022, i, j).getDay();
      console.log(`Folga no dia: ${j}/${i} ---- ${diaSemana(diaDaSemana)}`);
    }
  }
  return;
}

escalaErick(diaAtual, mesAtual);
