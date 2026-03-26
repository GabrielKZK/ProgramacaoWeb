function calcularIMC(){
    let nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let sexoSelecionado = document.querySelector('input[name="sexo"]:checked');
    let resultado = document.getElementById('resultado');

    if(nome === "" || isNaN(peso) || isNaN(altura) || !sexoSelecionado){
        resultado.classList.remove("d-none, alert-info, alert-success");
        resultado.classList.add("alert-danger");
        resultado.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
    } else if(imc < 25){
        classificacao = "Peso normal";
    } else if(imc < 30){
        classificacao = "Sobrepeso";
    }else if(imc < 35){
        classificacao = "Obesidade Grau I";
    }else if(imc < 40){
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    resultado.classList.remove("d-none, alert-danger");
    resultado.classList.add("alert-success");

    resultado.innerHTML = '<strong>${nome}</strong>, seu IMC é <strong>${imc.toFixed(2)}</strong>.<br>e você está classificado como <strong>${classificacao}</strong>.';

}