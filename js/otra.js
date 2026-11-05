function calcularPresupuesto() {
    // 1. Acceder a los inputs recorriendo el DOM del formulario (Instrucción 1)
    const formulario = document.querySelector('form');
    const inputs = formulario.querySelectorAll('input');

    // Obtener valores de los inputs por su posición en la lista
    const invitados = parseFloat(inputs[0].value) || 0;
    const costComida = parseFloat(inputs[1].value) || 0;
    const costBebida = parseFloat(inputs[2].value) || 0;
    const costDecoracion = parseFloat(inputs[3].value) || 0;
    const costMusica = parseFloat(inputs[4].value) || 0;
    const porcPropina = parseFloat(inputs[5].value) || 0;

    // 5. Validación: Si los invitados son 0 o está vacío (Instrucción 5)
    if (invitados <= 0) {
        alert("Por favor, ingrese un número de invitados válido (mayor a 0).");
        return;
    }

    // 3. Cálculos requeridos (Instrucción 3)
    const comidaTotal = invitados * costComida;
    const bebidaTotal = invitados * costBebida;
    const subtotal = comidaTotal + bebidaTotal + costDecoracion + costMusica;
    const propina = subtotal * (porcPropina / 100);
    const totalGeneral = subtotal + propina;
    const costoPorInvitado = totalGeneral / invitados;

    // 6. Formatear valores como dinero en Pesos Colombianos (Instrucción 6)
    const formatoMoneda = (valor) => valor.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
    });

    // 4. Acceder a las celdas de la tabla recorriendo el DOM (Instrucción 4)
    const filasTabla = document.querySelectorAll('tbody tr');

    // Asignar los resultados formateados en la columna de "Valor"
    filasTabla[0].children[1].textContent = formatoMoneda(comidaTotal);
    filasTabla[1].children[1].textContent = formatoMoneda(bebidaTotal);
    filasTabla[2].children[1].textContent = formatoMoneda(costDecoracion);
    filasTabla[3].children[1].textContent = formatoMoneda(costMusica);
    filasTabla[4].children[1].textContent = formatoMoneda(subtotal);
    filasTabla[5].children[1].textContent = formatoMoneda(propina);
    filasTabla[6].children[1].textContent = formatoMoneda(totalGeneral);
    filasTabla[7].children[1].textContent = formatoMoneda(costoPorInvitado);
}