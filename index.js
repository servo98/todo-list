/**
 * Obtener input y botón
 */
const input = document.getElementById('inputTarea');
const button = document.getElementById('buttonTarea');

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
    console.log(response);
  });
};

//Read

//Update

//Delete
