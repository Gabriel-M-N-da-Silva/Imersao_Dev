var numeroSecreto = parseInt((Math.random() * 10).toFixed(0));
var resultadoElement = document.getElementById("resultado");
var tentativas = 0;

function Chutar() {

  var chute = parseInt(document.getElementById("valor").value);

  if (tentativas != 3) {
    if (chute == numeroSecreto) {
      resultadoElement.innerHTML = "Acertou! O número era : " + numeroSecreto;
      tentativas = 3;
      console.log("Jogo finalizado.")
    } else if (chute > 10 || chute < 0) {
      resultadoElement.innerHTML = "O número deve ser de 0 a 10";
      tentativas++;
    } else if (chute > numeroSecreto) {
      resultadoElement.innerHTML = "O número é menor que " + chute;
      tentativas++;
    } else if (chute < numeroSecreto) {
      resultadoElement.innerHTML = "O número é maior que " + chute;
      tentativas++;
    }
  } else {
    console.log("Jogo finalizado.");
  }
}