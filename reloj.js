let intervalo;
function escribir_reloj() {
    const resultado = document.getElementById("hora");
    const hoy = new Date();
    if (valor_zona_horaria() != 'x') {
        horas = hoy.getHours() + parseInt(valor_zona_horaria());
        resultado.innerHTML = `${formatear_numero(horas)}:${formatear_numero(hoy.getMinutes())}:${formatear_numero(hoy.getSeconds())}<br />`
    }
}

function activar_reloj() {
    if (!intervalo) {
        intervalo = setInterval(escribir_reloj, 1000);
    }
}
function detener_reloj() {
    clearInterval(intervalo);
    intervalo = null;
}
function formatear_numero(numero) {
    return numero.toString().padStart(2, '0');
}

function cerrar_publicidad() {
    const imagen = document.getElementById("publicidad");
    foto_publicidad_cerrada = 'captura-pantalla-publicidad-cerrada.png'
    imagen.src = foto_publicidad_cerrada
}

function valor_zona_horaria() {
    diferencia_de_horas = document.getElementById("zona-horaria").value;
    return diferencia_de_horas;

}
