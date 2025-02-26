//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == '') {
        alert('Nome inválido');
        limpaNome()
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Nome já adicionado');
        limpaNome()
        return;
    }
    listaDeAmigos.push(nome);
    console.log(listaDeAmigos);
    limpaNome()
}

function limpaNome() {
    let campo = document.querySelector('input');
    campo.value = '';   
}