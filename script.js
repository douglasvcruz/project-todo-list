const button = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const texto = document.getElementById('texto-tarefa');

function addButton() {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = texto.value;
    ol.appendChild(li);
    texto.value = '';
    li.addEventListener('click', ({ target }) => {
      const liCreated = document.getElementsByTagName('li');
      for (let i = 0; i < liCreated.length; i += 1) {
        liCreated[i].style.backgroundColor = 'white';
      }
      target.style.backgroundColor = 'gray';
    });
  });
}

addButton();
