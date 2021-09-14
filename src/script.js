/*
Conversor de moedas Dólar ---> Real
*/

function Converter() {
  var moedaDe = document.getElementById("de").value; // De qual moeda vai ser convertida - "Real"/"Dólar"
  var moedaPara = document.getElementById("para").value; // Para qual moeda vai ser convertida - "Real"/"Dólar
  var elementoInput = document.getElementById("valor"); //Elemento da caixa para escrever
  var valorDoInput = parseFloat(elementoInput.value); //Oque está escrito na caixa
  var simbolo; // R$ ou U$
  var valorConvertido;

  
  // Conversão
  if (moedaDe == "Dólar" && moedaPara == "Real") { //Dólar para real
    valorConvertido = (valorDoInput * 5.43).toFixed(2);
    simbolo = "R$ ";
  }
  if (moedaDe == "Real" && moedaPara == "Dólar") { //Real pra dólar
    valorConvertido = (valorDoInput / 5.43).toFixed(2);
    simbolo = "U$ ";
  }
  if (moedaDe == moedaPara) { //Mesma moeda
    if (moedaDe == "Real") {
      simbolo = "R$";
    } else {
      simbolo = "U$";
    }
    valorConvertido = valorDoInput.toFixed(2);
  }
  
  // Print do resultado
  
  var elementoConvertido = document.getElementById("valorConvertido"); //Elemento que vai aparecer o resultado

  if (elementoInput.value != "") { //Se não estiver vazio
    elementoConvertido.innerHTML = simbolo + valorConvertido;
  }
}
