//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo() {
  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = inputAmigo.value.trim(); 
  let listaAmigos = document.getElementById('listaAmigos');

  if (nomeAmigo === '') {
    alert('Por favor, digite um nome.');
    return;
  }

  let existeAmigo = Array.from(listaAmigos.children).some(li => li.textContent === nomeAmigo);

  if (existeAmigo) {
    alert('Este nome já foi adicionado.');
  } else {
    let novoItem = document.createElement('li');
    novoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItem);
    inputAmigo.value = ''; 
  }
}

function sortearAmigo() {
  let listaNomes = document.getElementById('listaAmigos').children;
  let nomes = Array.from(listaNomes).map(item => item.textContent);
  let resultado = document.getElementById('resultado');
  
  nomes.sort(() => Math.random() - 0.5);

  let i = 0;
  while (i < nomes.length) {
    let amigoSecreto = nomes[(i + 1) % nomes.length];
    let novoItem = document.createElement('li');
    novoItem.textContent = `${nomes[i]} tirou: ${amigoSecreto}`;
    resultado.appendChild(novoItem);
    i++;
  }
}