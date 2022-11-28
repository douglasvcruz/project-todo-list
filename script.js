const button = document.getElementById("criar-tarefa");
const ol = document.getElementById("lista-tarefas");
const texto = document.getElementById("texto-tarefa");

function addButton() {
  button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = texto.value;
    ol.appendChild(li);
    texto.value = '';
  })
}

addButton();
