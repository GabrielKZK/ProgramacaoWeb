function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.innerHTML = "Resultado: Digite dois números válidos.";
        return;
    }

    let conta;

    switch (operacao) {
        case "+":
            conta = numero1 + numero2;
            break;

        case "-":
            conta = numero1 - numero2;
            break;

        case "*":
            conta = numero1 * numero2;
            break;

        case "/":
            if (numero2 === 0) {
                resultado.innerHTML = "Resultado: Não é possível dividir por zero.";
                return;
            }
            conta = numero1 / numero2;
            break;

        default:
            resultado.innerHTML = "Resultado: Operação inválida.";
            return;
    }

    resultado.innerHTML = "Resultado: " + conta;
}