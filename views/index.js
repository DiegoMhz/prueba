// app.js


const listaEmpleados = document.getElementById('lista-empleados');
const listaDepartamentos = document.querySelector('#listaDepartamentos');
const listaHabilidades = document.querySelector('#listaHabilidades');
const listaPuestos = document.querySelector('#listaPuestos');
const listaTareas = document.querySelector('#listaTareas');
console.log(listaTareas);
const getDatos = async () => {
    try {
      const response = await fetch('/empleados');
      const empleados = await response.json();
      const departamentos = await (await fetch('/departamentos')).json()
      const habilidades = await (await fetch('/habilidades')).json()
      const puestos = await (await fetch('/puestos')).json()
      const tareas  = await (await fetch('/tareas')).json()
    console.log(tareas);
      empleados.forEach(trabajador => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${trabajador.nombre}<br>
        <b>Telefono:</b>${trabajador.numero_telefono}<br>
        <b>Salarios:</b>${trabajador.salario}<br>
        <b>Correo:</b>${trabajador.correo_electronico}<br>
        <b>Puesto</b>${trabajador.puesto}<br>
        <b>Direccion:</b>${trabajador.direccion}<br>`;
        listaEmpleados.appendChild(listItem);
      });

      departamentos.forEach(element => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${element.nombre}<br>
        <b>Numero Empleados:</b>${element.numero_empleados}<br>
        <b>Descripcion:</b>${element.descripcion}<br>`;
        listaDepartamentos.appendChild(listItem);
      });

      habilidades.forEach(element => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${element.nombre}<br>
        <b>Nivel De Dominio:</b>${element.nivel_dominio}<br>
        <b>Fecha De Adquisicion:</b>${element.fecha_adquisicion}<br>`;
        listaHabilidades.appendChild(listItem);
      });

      puestos.forEach(element => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${element.nombre}<br>
        <b>Remuneracion:</b>${element.remuneracion}<br>
        <b>Fecha De Adquisicion:</b>${element.descripcion}<br>`;
        listaPuestos.appendChild(listItem);
      });

      tareas.forEach(element => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<b>Nombre:</b> ${element.nombre}<br>
        <b>Tiempo Estimado:</b>${element.tiempo_estimado} min<br>
        <b>Fecha De Adquisicion:</b>${element.descripcion}<br>`;
        listaTareas.appendChild(listItem);
      });
      

    } catch (error) {
      console.error('Error:', error);
    }
}

getDatos();
