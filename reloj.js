let intervalo;
function escribir_reloj(){
    const resultado = document.getElementById("hora");
    const hoy = new Date();
    resultado.innerHTML = `${formatear_numero(hoy.getHours())}:${formatear_numero(hoy.getMinutes())}:${formatear_numero(hoy.getSeconds())}<br />`
}

function activar_reloj(){
    if(!intervalo){
    intervalo = setInterval(escribir_reloj,1000);
    }
}
function detener_reloj(){
    clearInterval(intervalo);
    intervalo = null;
}
function formatear_numero(numero){
    return numero.toString().padStart(2,'0');
}

function cerrar_publicidad(){
    const imagen = document.getElementById("publicidad");
    foto_publicidad_cerrada = 'captura-pantalla-publicidad-cerrada.png'
    imagen.src = foto_publicidad_cerrada
}