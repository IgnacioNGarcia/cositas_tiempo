let index = 1;
let intervalo;

function iniciar_cronometro(){
    document.getElementById("tiempos").innerHTML = ``;
    intervalo = setInterval(function(){
        let horas = Math.floor(index/3600)
        let minutos = Math.floor((index%3600)/ 60); // Calcula los minutos
        let segundos = index % 60; // Calcula los segundos
        
        document.getElementById("tiempo-actual").innerHTML = `${horas}:${minutos}:${segundos} <br />`;
        index++;
    },1000);
}

function tomar_tiempo(){
    const span_cronometro = document.getElementById("tiempo-actual");
    const contenido = span_cronometro.textContent;
    const contenido_lineas = contenido.split('<br />');

    document.getElementById("tiempos").innerHTML += `${contenido_lineas[contenido_lineas.length-1]}  <br />`;
}


function detener_cronometro(){
    clearInterval(intervalo)
    index = 1;
    ruido_detener()
}

function cerrar_publicidad(){
    const imagen = document.getElementById("publicidad");
    foto_publicidad_cerrada = 'captura-pantalla-publicidad-cerrada.png'
    imagen.src = foto_publicidad_cerrada
}

function ruido_detener(){
    const audio = new Audio('whistle.mp3');
    audio.play();
}