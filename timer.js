let index = 1;
let intervalo;


function detener_timer() {
    clearInterval(intervalo); // Detener el intervalo utilizando la variable intervalo
    index = 1; // Reiniciar el contador
}

function iniciar_timer(){
    document.getElementById("contador").innerHTML = ''
    intervalo = setInterval(function(){
        tiempo_pedido = document.getElementById("tiempo").value
        if (index <= tiempo_pedido){
            document.getElementById("contador").innerHTML = `${index}<br />`;
            index++;
        }else{
            detener_timer()
            ruido_timer_finalizado()
        }
    },1000);
}

function ruido_timer_finalizado(){
    const audio = new Audio('microwave-timer-117077.mp3');
    audio.play();
}

function cerrar_publicidad(){
    const imagen = document.getElementById("publicidad");
    foto_publicidad_cerrada = 'captura-pantalla-publicidad-cerrada.png'
    imagen.src = foto_publicidad_cerrada
}
/*
Dos maneras de hacerlo

function iniciar_timer(){
    document.getElementById("contador").innerHTML = ''
    intervalo = setInterval(escribir_tiempo(),1000);
}

function escribir_tiempo(){
    tiempo_pedido = document.getElementById("tiempo").value
        if (index <= tiempo_pedido){
            document.getElementById("contador").innerHTML += `${index}<br />`;
            index++;
        }else{
            detener_timer()
        }
}

*/

