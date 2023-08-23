EXPLCACIÓN DEL CÓDIGO EN almacenar.js:

1. Se obtienen las referencias a tres elementos HTML mediante el uso de document.getElementById y se almacenan en variables:

- add: Representa el botón "Agregar".
- container: Representa el contenedor (<ul>) donde se mostrarán los ítems en el listado.
- clearButton: Representa el botón "Limpiar".

2. Se define la función agregarItem, que se ejecutará cuando se haga clic en el botón "Agregar":

- Se obtiene el valor del campo de entrada con el id "item".
- Se verifica que el valor no esté vacío utilizando .trim() para eliminar espacios en blanco.
- Si el valor no está vacío, se obtienen los datos actuales del almacenamiento local con localStorage.getItem("data").
- Si no hay datos almacenados previamente, se inicializa storedData con una cadena vacía.
- Se crea una nueva cadena HTML (newItem) que representa el nuevo ítem, usando la plantilla de cadena (template literal) y el valor del campo de entrada.
- Se agrega la cadena newItem a storedData.
- Se actualiza el contenido del contenedor (container.innerHTML) con los nuevos datos (storedData).
- Se limpia el campo de entrada (document.getElementById("item").value = "").
- Se guarda storedData actualizado en el almacenamiento local con localStorage.setItem("data", storedData).

3. Se define la función limpiarListado, que se ejecutará cuando se haga clic en el botón "Limpiar":

- Se elimina el elemento "data" del almacenamiento local con localStorage.removeItem("data").
- Se limpia el contenido del contenedor (container.innerHTML = ""), dejando el listado vacío.

4. Se utiliza el evento DOMContentLoaded para asegurarse de que el código se ejecute después de que el DOM se haya cargado completamente:

- Se obtienen los datos almacenados previamente en el almacenamiento local con localStorage.getItem("data").
- Si existen datos almacenados, se actualiza el contenido del contenedor con los datos (container.innerHTML = storedData), lo que muestra los ítems en el listado.

5. Se agregan eventos de clic a los botones "Agregar" y "Limpiar" utilizando addEventListener:

- Cuando se hace clic en el botón "Agregar", se ejecuta la función agregarItem.
- Cuando se hace clic en el botón "Limpiar", se ejecuta la función limpiarListado.

En resumen, este código se encarga de agregar ítems al listado, almacenarlos en el almacenamiento local, cargar los ítems almacenados al cargar la página y permitir la limpieza del listado y del almacenamiento local.