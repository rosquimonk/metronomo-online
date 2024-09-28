// Obtener elementos del DOM
const tempoSlider = document.getElementById('tempo');
const tempoValue = document.getElementById('tempo-value');
const volumeSlider = document.getElementById('volume');
const startStopButton = document.getElementById('start-stop');

// Configurar el sonido del clic
const clickSound = new Audio('sounds/click.mp3');
clickSound.volume = volumeSlider.value;

// Variables para el intervalo del metrónomo
let intervalId = null;
let isPlaying = false;

// Actualizar el valor del tempo en la interfaz
tempoSlider.addEventListener('input', () => {
    tempoValue.textContent = tempoSlider.value;
    if (isPlaying) {
        clearInterval(intervalId);
        startMetronome();
    }
});

// Actualizar el volumen del sonido
volumeSlider.addEventListener('input', () => {
    clickSound.volume = volumeSlider.value;
});

// Función para iniciar el metrónomo
function startMetronome() {
    const interval = (60 / tempoSlider.value) * 1000;
    intervalId = setInterval(() => {
        clickSound.currentTime = 0;
        clickSound.play();
    }, interval);
}

// Manejar el botón de inicio/detención
startStopButton.addEventListener('click', () => {
    if (isPlaying) {
        clearInterval(intervalId);
        startStopButton.textContent = 'Iniciar';
    } else {
        startMetronome();
        startStopButton.textContent = 'Detener';
    }
    isPlaying = !isPlaying;
});
