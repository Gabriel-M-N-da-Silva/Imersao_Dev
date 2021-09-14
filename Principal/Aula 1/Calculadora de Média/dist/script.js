var nomeDoAluno = "Gabriel";
var notaPrimeiroTrimestre = 9;
var notaSegundoTrimestre = 10;
var notaTerceiroTrimestre = 7;
var mediaGeral = ((notaPrimeiroTrimestre+
                   notaSegundoTrimestre+
                   notaTerceiroTrimestre)/3).toFixed(1);

var mensagem = "Aluno: " + nomeDoAluno + "\n Média geral: " + mediaGeral;

console.log(mensagem);