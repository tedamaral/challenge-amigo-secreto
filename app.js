//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];

function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome == '') {
        alert('Nome inválido');
    }
    else if (listaDeAmigos.includes(nome)) {
        alert('Nome já adicionado');
    }
    else{
        listaDeAmigos.push(nome);
    }    
    console.log(listaDeAmigos);
    mostrarLista()
    limpaNome()
}

function limpaNome() {
    let campo = document.querySelector('input');
    campo.value = '';   
}

function mostrarLista() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    for (let i = 0; i < listaDeAmigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = listaDeAmigos[i];
        lista.appendChild(item);
    }
}