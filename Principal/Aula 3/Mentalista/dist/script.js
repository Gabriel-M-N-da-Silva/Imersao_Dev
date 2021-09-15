var numeroSecreto = parseInt((Math.random() * 10).toFixed(0));
var resultadoElement = document.getElementById("resultado");

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    resultadoElement.innerHTML = "Acertou! O número era : " + numeroSecreto;
    console.log("Jogo finalizado.");
  } else if (chute > 10 || chute < 0) {
    resultadoElement.innerHTML = "O número deve ser de 0 a 10";
  } else if (chute > numeroSecreto) {
    resultadoElement.innerHTML = "O número é menor que " + chute;
  } else if (chute < numeroSecreto) {
    resultadoElement.innerHTML = "O número é maior que " + chute;
  }
}