/**
 * Obtener input y botón
 */
const input = document.getElementById('inputTarea');
const button = document.getElementById('buttonTarea');
const readButton = document.getElementById('readTareas');
const lista = document.getElementById('lista');

//Funcion [tarea] -> [div]
function toDivs(arregloTareas) {
  lista.innerHTML = '';
  const tareaDivs = arregloTareas.map((tarea) => {
    const divTarea = document.createElement('div');
    divTarea.id = tarea._id;
    divTarea.innerHTML = `
      <span>${tarea.name}</span>
      <button onclick="borrarTarea(this)">X</button>
    `;
    return divTarea;
  });
  lista.append(...tareaDivs);
}

/**
 * CRUD
 */

//Create
button.onclick = () => {
  //Validar que input no esté vacío
  if (input.value === '') {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'El campo tarea no debe quedar vacío',
    });
    return;
  }

  axios({
    method: 'POST',
    url: 'https://crudcrud.com/api/5726ab585dff4e1ca2df91241df9bd46/todos',
    data: {
      name: input.value,
    },
  }).then((response) => {
    input.value = '';
    Swal.fire({
      icon: 'success',
      title: 'Éxito',
      text: 'Tarea creada exitosamente!',
    });
    console.log(response);
  });
};

//Read
readButton.onclick = () => {
  axios({
    method: 'GET',
    url: 'https://crudcrud.com/api/5726ab585dff4e1ca2df91241df9bd46/todos',
  }).then((response) => {
    toDivs(response.data);
  });
};

//Update

//Delete
function borrarTarea(elemento) {
  const tareaId = elemento.parentElement.id;
  axios({
    method: 'DELETE',
    url:
      'https://crudcrud.com/api/5726ab585dff4e1ca2df91241df9bd46/todos/' +
      tareaId,
  }).then((response) => {
    const divTArea = elemento.parentElement;
    divTArea.parentElement.removeChild(divTArea);
    console.log(response.data);
  });
}
