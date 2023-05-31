// Array para almacenar las personas
let personas = [];

// Función para crear una nueva persona
function crearPersona() {
  // Obtener valores del formulario
  const tipoIdentificacion = document.getElementById('tipo-identificacion').value;
  const numeroIdentificacion = document.getElementById('numero-identificacion').value;
  const nombres = document.getElementById('nombres').value;
  const apellidos = document.getElementById('apellidos').value;
  const pais = document.getElementById('pais').value;
  const ciudad = document.getElementById('ciudad').value;
  const avatar = document.getElementById('avatar').value; // Aquí obtendrías la ruta del archivo

  // Crear objeto persona
  const persona = {
    tipoIdentificacion,
    numeroIdentificacion,
    nombres,
    apellidos,
    pais,
    ciudad,
    avatar
  };

  // Agregar persona al array
  personas.push(persona);

  // Limpiar formulario
  limpiarFormulario();

  // Mostrar mensaje de éxito
  alert('Persona creada exitosamente');
}

// Función para limpiar el formulario
function limpiarFormulario() {
  document.getElementById('tipo-identificacion').value = '';
  document.getElementById('numero-identificacion').value = '';
  document.getElementById('nombres').value = '';
  document.getElementById('apellidos').value = '';
  document.getElementById('pais').value = '';
  document.getElementById('ciudad').value = '';
  document.getElementById('avatar').value = '';
}

// Función para consultar personas
function consultarPersonas() {
  // Obtener valores de consulta
  const consultaIdentificacion = document.getElementById('consulta-identificacion').value;
  const consultaNombres = document.getElementById('consulta-nombres').value;
  const consultaApellidos = document.getElementById('consulta-apellidos').value;

  // Filtrar personas según los criterios de consulta
  const resultados = personas.filter(persona =>
    persona.numeroIdentificacion.includes(consultaIdentificacion) &&
    persona.nombres.includes(consultaNombres) &&
    persona.apellidos.includes(consultaApellidos)
  );

  // Mostrar resultados en una tabla
  mostrarResultados(resultados);
}

// Función para mostrar los resultados de la consulta en una tabla
function mostrarResultados(resultados) {
  const resultadosContainer = document.getElementById('resultados');

  // Limpiar resultados anteriores
  resultadosContainer.innerHTML = '';

  if (resultados.length === 0) {
    resultadosContainer.innerHTML = 'No se encontraron personas.';
  } else {
    const table = document.createElement('table');
    const tableHeader = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    // Crear encabezado de la tabla
    const headerRow = document.createElement('tr');
    const headers = ['ID', 'Tipo de Identificación', 'Nombres', 'Apellidos', 'País', 'Ciudad'];

    headers.forEach(headerText => {
      const header = document.createElement('th');
      header.textContent = headerText;
      headerRow.appendChild(header);
    });

    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    // Agregar filas de datos a la tabla
    resultados.forEach(persona => {
      const row = document.createElement('tr');
      const values = [
        persona.numeroIdentificacion,
        persona.tipoIdentificacion,
        persona.nombres,
        persona.apellidos,
        persona.pais,
        persona.ciudad
      ];

      values.forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });

    resultadosContainer.appendChild(table);
  }
}
