let add = document.getElementById("agregar");
let container = document.getElementById("contenedor");
let clearButton = document.getElementById("limpiar");

const AGREGAR_ITEM = () => {
  let inputValue = document.getElementById("item").value;

  if (inputValue.trim() !== "") {
    let storedData = localStorage.getItem("data");

    if (!storedData) {
      storedData = "";
    }
    let newItem = `<li class="list-group-item">${inputValue}</li>`;
    storedData += newItem;
    container.innerHTML = storedData;
    document.getElementById("item").value = "";
    localStorage.setItem("data", storedData);
  }
};

const LIMPIAR_LISTADO = () => {
  localStorage.removeItem("data");
  container.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  let storedData = localStorage.getItem("data");
  if (storedData) {
    container.innerHTML = storedData;
  }
});

add.addEventListener("click", AGREGAR_ITEM);
clearButton.addEventListener("click", LIMPIAR_LISTADO);