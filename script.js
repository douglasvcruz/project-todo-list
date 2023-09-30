const removeFinished = document.getElementById('remover-finalizados');
const deleteAll = document.getElementById('apaga-tudo');
const createTask = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const textOfTask = document.getElementById('texto-tarefa');
const saveTask = document.getElementById('salvar-tarefas');
const goDown = document.getElementById('mover-baixo');
const moveUp = document.getElementById('mover-cima');
const removeSelected = document.getElementById('remover-selecionado');

const taskOneClick = (e) => {
  const allCreatedLi = document.getElementsByTagName('li');
  for (let i = 0; i < allCreatedLi.length; i += 1) {
    allCreatedLi[i].style.backgroundColor = 'white';
  }
  e.target.style.backgroundColor = 'gray';
};

const taskDoubleClick = (e) => {
  if (e.target.className === 'completed') {
    e.target.className = '';
  } else {
    e.target.className = 'completed';
  }
};

const createNewTask = () => {
  if (textOfTask.value === '') {
    alert('Falta preencher a tarefa');
    return;
  }
  const li = document.createElement('li');
  li.innerText = textOfTask.value;
  textOfTask.value = '';
  ol.appendChild(li);
  li.addEventListener('click', taskOneClick);
  li.addEventListener('dblclick', taskDoubleClick);
};

const resetTasks = () => {
  ol.innerHTML = '';
};

const removeCompleted = () => {
  const allTasksCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < allTasksCompleted.length; i += 1) {
    ol.removeChild(allTasksCompleted[i]);
  }
};

const saveLocalStorage = () => localStorage.setItem('ol', ol.innerHTML);

const addLocalStorage = () => {
  if (localStorage.getItem('ol')) {
    ol.innerHTML = localStorage.getItem('ol');
  }
};

const down = () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === 'gray' && li[i + 1]) {
      const saveLi = li[i].innerHTML;
      li[i].innerHTML = li[i + 1].innerHTML;
      li[i + 1].innerHTML = saveLi;
      li[i].style.backgroundColor = 'white';
      li[i + 1].style.backgroundColor = 'gray';
      break;
    }
  }
};

const up = () => {
  const li = document.querySelectorAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === 'gray' && li[i - 1]) {
      const saveLi = li[i].innerHTML;
      li[i].innerHTML = li[i - 1].innerHTML;
      li[i - 1].innerHTML = saveLi;
      li[i].style.backgroundColor = 'white';
      li[i - 1].style.backgroundColor = 'gray';
      break;
    }
  }
};

const removeTaskSelected = () => {
  const allTasks = document.querySelectorAll('li');
  for (let i = 0; i < allTasks.length; i += 1) {
    if (allTasks[i].style.backgroundColor === 'gray') {
      allTasks[i].remove();
    }
  }
};

addLocalStorage();

removeSelected.addEventListener('click', removeTaskSelected);
moveUp.addEventListener('click', up);
goDown.addEventListener('click', down);
saveTask.addEventListener('click', saveLocalStorage);
removeFinished.addEventListener('click', removeCompleted);
createTask.addEventListener('click', createNewTask);
deleteAll.addEventListener('click', resetTasks);
