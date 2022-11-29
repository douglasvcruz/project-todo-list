const removerFinal = document.getElementById('remover-finalizados');
const delButton = document.getElementById('apaga-tudo');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');
const guardar = document.getElementById('salvar-tarefas');

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
    return ol.innerHTML = localStorage.getItem('ol');
  }
}

adiciona();
guardar.addEventListener('click', armazena);
removerFinal.addEventListener('click', removerFinalizados);
button.addEventListener('click', addButton);
delButton.addEventListener('click', apagar);
