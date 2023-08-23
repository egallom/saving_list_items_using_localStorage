let add = document.getElementById("agregar");
let container = document.getElementById("contenedor");
let clearButton = document.getElementById("limpiar");

// Función para agregar un nuevo ítem al listado
const AGREGAR_ITEM = () => {
  let inputValue = document.getElementById("item").value;

  if (inputValue.trim() !== "") {
    // Verificar que el valor no esté vacío
    // Obtener el contenido actual del almacenamiento local
    let storedData = localStorage.getItem("data");

    if (!storedData) {
      storedData = ""; // Inicializar en caso de no haber datos guardados previamente
    }

    // Crear el nuevo ítem y agregarlo a los datos almacenados
    let newItem = `<li class="list-group-item">${inputValue}</li>`;
    storedData += newItem;

    // Actualizar el contenido del contenedor
    container.innerHTML = storedData;

    // Limpiar el campo para añadir nuevos ítems
    document.getElementById("item").value = "";

    // Guardar los ítems actualizados en el almacenamiento local
    localStorage.setItem("data", storedData);
  }
};

// Función para limpiar el listado almacenado y actualizar la vista
const LIMPIAR_LISTADO = () => {
  // Limpiar el almacenamiento local
  localStorage.removeItem("data");

  // Limpiar la vista del listado
  container.innerHTML = "";
};

// Cargar los ítems almacenados en el almacenamiento local al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  let storedData = localStorage.getItem("data");
  if (storedData) {
    container.innerHTML = storedData;
  }
});

// Agregar evento al botón de Agregar
add.addEventListener("click", AGREGAR_ITEM);

// Agregar evento al botón de Limpiar
clearButton.addEventListener("click", LIMPIAR_LISTADO);
