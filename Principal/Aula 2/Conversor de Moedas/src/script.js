function Converter() {
  var moedaDe = document.getElementById("de").value;
  var moedaPara = document.getElementById("para").value;

  var elementoInput = document.getElementById("valor");
  var valorDoInput = parseFloat(elementoInput.value);
  var simbolo;
  var valorConvertido;

  if (moedaDe == "Dólar" && moedaPara == "Real") {
    valorConvertido = (valorDoInput * 5.43).toFixed(2);
    simbolo = "R$ ";
  }
  if (moedaDe == "Real" && moedaPara == "Dólar") {
    valorConvertido = (valorDoInput / 5.43).toFixed(2);
    simbolo = "U$ ";
  }
  if (moedaDe == moedaPara) {
    if (moedaDe == "Real") {
      simbolo = "R$";
    } else {
      simbolo = "U$";
    }
    valorConvertido = valorDoInput.toFixed(2);
  }

  var elementoConvertido = document.getElementById("valorConvertido");

  if (elementoInput.value != "") {
    elementoConvertido.innerHTML = simbolo + valorConvertido;
  }
}
