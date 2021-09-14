function Calcular() {
  var elementoInput = document.getElementById("distancia");
  var valorDoInput = parseInt(elementoInput.value);
  var velocidadeDaLuz = 300000;
  var elementoConvertido = document.getElementById("valorCalculado");
  var valorCalculado = 0;

  elementoConvertido.innerHTML = valorCalculado + "min";
  valorCalculado = valorDoInput / velocidadeDaLuz;
  var valorCalculadoEmMinutos = (valorCalculado / 60).toFixed(0);

  if (elementoInput.value != "") {
    elementoConvertido.innerHTML = valorCalculadoEmMinutos + " min";
  }
}