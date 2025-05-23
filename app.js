const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');
const portada = document.querySelector('#portada img');

const currentTimeDisplay = document.getElementById('currentTime');
const durationDisplay = document.getElementById('duration');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');
const caratula = document.getElementById('caratula-cancion');

const iconoControl = document.getElementById('iconoControl');
const btnPlayPause = document.querySelector(
  '.controles button.btn-reproducir-pausar'
);

const botonAtras = document.querySelector('.controles button.atras');
const botonSiguiente = document.querySelector('.controles button.siguiente');

const canciones = [
  {
    titulo: 'Take on Me',
    nombre: 'a-ha',
    fuente:
      'music/a-ha - Take On Me (Video Oficial) __ Sub Español   Lyrics(MP3_320K).mp3',
    caratula: 'caratula/A-ha-Take On me.jpg',
  },
  {
    titulo: 'Skyfall',
    nombre: 'Adele',
    fuente: 'music/Adele - Skyfall (Official Lyric Video)(MP3_320K).mp3',
    caratula: 'caratula/Skyfall - Adele.jpg',
  },
  {
    titulo: 'Queen of Kings',
    nombre: 'Alessandra',
    fuente:
      'music/Alessandra - Queen of Kings (Official Music Video)(MP3_320K).mp3',
    caratula: 'caratula/Alessandra - Queen Of Kings (Lyrics).jpg',
  },
  {
    titulo: 'You  Make Me (Remake)',
    nombre: 'ANYMA _ RÜFÜS DU SOL',
    fuente: 'music/ANYMA _ RÜFÜS DU SOL - You Make Me (Remake)(MP3_320K).mp3',
    caratula: 'caratula/Rufus Du Sol.jpg',
  },
  {
    titulo: 'Ojitos Lindos',
    nombre: 'Bad Bunny ft Bomba Estéreo',
    fuente:
      'music/Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos (360° Visualizer) _ Un Verano Sin Ti(MP3_320K).mp3',
    caratula: 'caratula/Ojitos Lindos- Bad Bunny.png',
  },
  {
    titulo: 'Game of Thrones',
    nombre: 'KZHRM',
    fuente: 'music/Game Of Thrones (8D Audio)--(MP3_320K).mp3',
    caratula: 'caratula/Game of Thrones.jpg',
  },
  {
    titulo: 'Injuria 2',
    nombre: 'Uknown',
    fuente: 'music/inuria 2(MP3_320K).mp3',
    caratula: 'caratula/injuria-2.jpg',
  },
  {
    titulo: 'Zero',
    nombre: 'Insite',
    fuente: 'music/Insite - Zero(MP3_320K).mp3',
    caratula: 'caratula/Zero- Insite.jpg',
  },
];

let indiceCancionActual = 0;

function actualizarInfoCancion() {
  tituloCancion.textContent = canciones[indiceCancionActual].titulo;
  nombreArtista.textContent = canciones[indiceCancionActual].nombre;
  caratula.src = canciones[indiceCancionActual].caratula;
  cancion.src = canciones[indiceCancionActual].fuente;

  cancion.addEventListener('loadedmetadata', function () {});
}

//formato de tiempo
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}
//metadatos de la cancion
cancion.addEventListener('loadedmetadata', () => {
  // progreso.max = cancion.duration;
  // progreso.value = cancion.currentTime;
  durationDisplay.textContent = formatTime(cancion.duration);
  progreso.max = cancion.duration;
  console.log(cancion.duration);
});

cancion.addEventListener('timeupdate', () => {
  currentTimeDisplay.textContent = formatTime(cancion.currentTime);
  progreso.value = cancion.currentTime;
});

btnPlayPause.addEventListener('click', reproducirPausar);

function reproducirPausar() {
  if (cancion.paused) {
    reproducirCancion();
  } else {
    pausarCancion();
  }
}

function reproducirCancion() {
  cancion.play();
  iconoControl.classList.add('bi-pause');
  iconoControl.classList.remove('bi-play');
}
function pausarCancion() {
  cancion.pause();
  iconoControl.classList.add('bi-play');
  iconoControl.classList.remove('bi-pause');
}

//la barra de progreso se mueve automaticamente cuando la cancion avanza
cancion.addEventListener('timeupdate', () => {
  if (!cancion.paused) {
    progreso.value = cancion.currentTime;
  }
});
//esta funcion es para que muevas la barra de progreso y se reproduzca la cancion desde el tiempo que le des
progreso.addEventListener('input', () => {
  cancion.currentTime = progreso.value;
});
//esta funcion es para que la cancion inicie cuando la barra de progreso se mueve
progreso.addEventListener('change', () => {
  reproducirCancion();
});

//adelantar cancion
botonSiguiente.addEventListener('click', () => {
  indiceCancionActual = (indiceCancionActual + 1) % canciones.length;
  actualizarInfoCancion();
  reproducirCancion();
});

//retroceder cancion
botonAtras.addEventListener('click', () => {
  indiceCancionActual =
    (indiceCancionActual - 1 + canciones.length) % canciones.length;
  actualizarInfoCancion();
  reproducirCancion();
});

actualizarInfoCancion();
