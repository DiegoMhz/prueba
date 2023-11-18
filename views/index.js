// app.js
document.addEventListener('DOMContentLoaded', async function () {
    try {
      const response = await fetch('/obtenerdatos');
      const trabajadores = await response.json();
      const listaTrabajadores = document.getElementById('lista-trabajadores');
      trabajadores.forEach(trabajador => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${trabajador.id}, Nombre: ${trabajador.nombre}, Edad: ${trabajador.edad}`;
        listaTrabajadores.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error:', error);
    }
  });
  


