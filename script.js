const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

const addButton = () => {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = texto.value;
    ol.appendChild(li);
    texto.value = '';
    li.addEventListener('click', (e) => {
      const liCreated = document.getElementsByTagName('li');
      for (let i = 0; i < liCreated.length; i += 1) liCreated[i].style.backgroundColor = 'white';
      e.target.style.backgroundColor = 'gray';
    });
    li.addEventListener('dblclick', (e) => {
      if (e.target.className === 'completed') {
        e.target.className = '';
      } else {
        e.target.className = 'completed';
      }
    });
  });
};

addButton();
