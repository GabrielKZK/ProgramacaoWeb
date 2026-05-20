function enviarFormulario(event) {
  event.preventDefault();

  var nome = document.getElementById("nome").value;
  var respostaUsuario = parseInt(document.getElementById("resposta-usuario").value);

  var numero1 = 10;
  var numero2 = 5;

  var resultadoCorreto = realizarSoma(numero1, numero2);

  if (respostaUsuario === resultadoCorreto) {
    alert("Muito bem, " + nome + "! Validação aceita e formulário enviado.");
  } else {
    alert("Ops, " + nome + "... O resultado da soma está errado. Tente de novo!");
  }
}

function realizarSoma(a, b) {
  return a + b;
}