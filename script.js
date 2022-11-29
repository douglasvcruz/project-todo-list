const removerFinal = document.getElementById('remover-finalizados');
const delButton = document.getElementById('apaga-tudo');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
const guardar = document.getElementById('salvar-tarefas');
const abaixar = document.getElementById('mover-baixo');
const subir = document.getElementById('mover-cima');
const removerSelecionado = document.getElementById('remover-selecionado');

const liOneClick = (e) => {
  const liCreated = document.getElementsByTagName('li');
  for (let i = 0; i < liCreated.length; i += 1) {
    liCreated[i].style.backgroundColor = 'white';
  }
  e.target.style.backgroundColor = 'gray';
};

const liDoubleClick = (e) => {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.className = 'completed';
  }
};

const addButton = () => {
  const li = document.createElement('li');
  li.innerText = texto.value;
  texto.value = '';
  ol.appendChild(li);
  li.addEventListener('click', liOneClick);
  li.addEventListener('dblclick', liDoubleClick);
};

const apagar = () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    ol.removeChild(li[i]);
  }
};

const removerFinalizados = () => {
  const li = document.querySelectorAll('.completed');
  for (let i = 0; i < li.length; i += 1) {
    ol.removeChild(li[i]);
  }
};

const armazena = () => localStorage.setItem('ol', ol.innerHTML);
const adiciona = () => {
  if (localStorage.getItem('ol')) {
    ol.innerHTML = localStorage.getItem('ol');
  }
};

const baixo = () => {
  const li = document.querySelectorAll('li');

  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === 'gray' && li[i + 1]) {
      const guardarLi = li[i].innerHTML;
      li[i].innerHTML = li[i + 1].innerHTML;
      li[i + 1].innerHTML = guardarLi;
      li[i].style.backgroundColor = 'white';
      li[i + 1].style.backgroundColor = 'gray';
      break;
    }
  }
};

const cima = () => {
  const li = document.querySelectorAll('li');

  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === 'gray' && li[i - 1]) {
      const guardarLi = li[i].innerHTML;
      li[i].innerHTML = li[i - 1].innerHTML;
      li[i - 1].innerHTML = guardarLi;
      li[i].style.backgroundColor = 'white';
      li[i - 1].style.backgroundColor = 'gray';
      break;
    }
  }
};

const selecionado = () => {
  const selected = document.querySelectorAll('li');
  for (let i = 0; i < selected.length; i += 1) {
    if (selected[i].style.backgroundColor === 'gray') {
      selected[i].remove();
    }
  }
};

adiciona();

removerSelecionado.addEventListener('click', selecionado);
subir.addEventListener('click', cima);
abaixar.addEventListener('click', baixo);
guardar.addEventListener('click', armazena);
removerFinal.addEventListener('click', removerFinalizados);
button.addEventListener('click', addButton);
delButton.addEventListener('click', apagar);
