// app.js


const listaEmpleados = document.getElementById('lista-empleados');


const getDatos = async () => {
    try {
      const response = await fetch('/empleados');
      const empleados = await response.json();
      const departamentos = await (await fetch('/departamentos')).json()
      const habilidades = await (await fetch('/habilidades')).json()
      const puestos = await (await fetch('/puestos')).json()
      const tareas  = await (await fetch('/puestos')).json()
    console.log(empleados);
      empleados.forEach(trabajador => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${trabajador.nombre}<br>
        <b>Telefono:</b>${trabajador.numero_telefono}<br>
        <b>Salarios:</b>${trabajador.salario}<br>
        <b>Correo:</b>${trabajador.correo_electronico}<br>
        <b>Puesto</b>${trabajador.puesto}<br>
        <b>Direccion</b>${trabajador.direccion}<br>`;
        listaEmpleados.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error:', error);
    }
}

getDatos();
