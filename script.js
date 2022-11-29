const delButton = document.getElementById('apaga-tudo');
const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

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
  li.className = 'test';
  texto.value = '';
  ol.appendChild(li);
  li.addEventListener('click', liOneClick);
  li.addEventListener('dblclick', liDoubleClick);
};

const apagar = () => {
  const li = document.querySelectorAll('.test');
  for (let i = 0; i < li.length; i += 1) {
    ol.removeChild(li[i]);
  }
};

button.addEventListener('click', addButton);
delButton.addEventListener('click', apagar);
