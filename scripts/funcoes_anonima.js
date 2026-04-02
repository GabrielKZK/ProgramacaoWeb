const alert1 = function() {
    alert("Primeiro Alerta");
}

const alert2 = function() {
    alert("Segundo Alerta");
}

function capturarTecla(event) {

    const mensagem = document.getElementById("mensagem");

    if (event.key == "Enter") {
        mensagem.innerHTML = "CONFIRMADO";
    } else if (event.key == "Escape") {
        mensagem.innerHTML = "CANCELADO";
        document.getElementById("txtV1").value = "";
    } else {
        mensagem.innerHTML = "TECLA PRESSIONADA: " + event.key;
    }
}

function registrar() {

    var vl = document.getElementById("txtV1").value;

    if (vl == 1) {
        document.getElementById("btExecutar").onclick = alert1;
    }
    else if (vl == 2) {
        document.getElementById("btExecutar").onclick = alert2;
    }

}

function alterarConteudo() {
    const titulo = document.getElementById("titulo");
    titulo.textContent = "Título Alterado pelo JavaScript";

    const primeiroParagrafo = document.querySelector(".paragrafo");
    primeiroParagrafo.style.backgroundColor = "yellow";

    const todosParagrafos = document.querySelectorAll(".paragrafo");

    todosParagrafos.forEach(function(paragrafo, index) {
        paragrafo.textContent = "Parágrafo " + (index + 1) + " alterado pelo JavaScript";
    });

    alert("Alterações realizadas!");
}

function adicionarItem() {
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = "Novo Item Adicionado";
    lista.appendChild(novoItem);
}