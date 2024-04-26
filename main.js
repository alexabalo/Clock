const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    // Obtiene la hora actual del sistema
    const now = new Date();

     // Extrae las horas, minutos y segundos de la hora actual
   const hours = now.getHours() %12   // Utiliza el módulo 12 para convertir a formato de 12 horas
    const minute = now.getMinutes();
    const seconds = now.getSeconds();

    // Calcula los ángulos de rotación para cada manecilla
    const hourDeg = (hours * 30) + (0.5 * minute);// 30 grados por hora, 0.5 grados por minuto
    const minuteDeg = (minute * 6) + (0.1 * seconds); // 6 grados por minuto, 0.1 grados por segundo
    const secondDeg = seconds * 6; // 6 grados por segundo

    //aplica las rotaciones a las manesillas del reloj mediante la propiedad transform de css
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    }

    
// Llama a la función setClock cada segundo (1000 milisegundos) para mantener el reloj actualizado
setInterval(setClock, 1000);