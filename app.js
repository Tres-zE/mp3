const tituloCancion = document.querySelector('.reproductor-musica h1');
const nombreArtista = document.querySelector('.reproductor-musica p');
const portada = document.querySelector('#portada img');

const progreso = document.getElementById('progreso');
const cancion = document.getElementById('cancion');

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
    fuente: 'music/a-ha - Take On Me (Video Oficial) __ Sub Español   Lyrics(MP3_320K).mp3',
  },
  {
    titulo: 'Skyfall',
    nombre: 'Adele',
    fuente: 'music/Adele - Skyfall (Official Lyric Video)(MP3_320K).mp3',
  },
  {
    titulo: 'Queen of Kings',
    nombre: 'Alessandra',
    fuente: 'music/Alessandra - Queen of Kings (Official Music Video)(MP3_320K).mp3'
  },
  {
    titulo: 'You  Make Me (Remake)',
    nombre: 'ANYMA _ RÜFÜS DU SOL',
    fuente: 'music/ANYMA _ RÜFÜS DU SOL - You Make Me (Remake)(MP3_320K).mp3' 
  },
  {
    titulo: 'Take on Me',
    nombre: 'a-ha',
    fuente: 'music/a-ha - Take On Me.mp3'
  },
  {
    titulo: 'Ojitos Lindos',
    nombre: 'Bad Bunny ft Bomba Estéreo',
    fuente: 'music/Bad Bunny (ft. Bomba Estéreo) - Ojitos Lindos (360° Visualizer) _ Un Verano Sin Ti(MP3_320K).mp3'
  },
  {
    titulo: 'Take on Me',
    nombre: 'a-ha',
    fuente: 'music/a-ha - Take On Me.mp3'
  },
  {
    titulo: 'Game of Thrones',
    nombre: 'KZHRM',
    fuente: 'music/Game Of Thrones (8D Audio)--(MP3_320K).mp3'
  },
  {
    titulo: 'Injuria 2',
    nombre: 'Uknown',
    fuente: 'music/inuria2(MP3_320K).mp3'
  },
  {
    titulo: 'Zero',
    nombre: 'Insite',
    fuente: 'music/Insite - Zero(MP3_320K).mp3'
  }
]

let indiceCancionActual = 0;

function actualizarInfoCancion(){
  tituloCancion.textContent = canciones[indiceCancionActual].titulo;
  nombreArtista.textContent = canciones[indiceCancionActual].nombre;
  cancion.src = canciones[indiceCancionActual].fuente;
  cancion.addEventListener('loadeddata', function(){});
}

btnPlayPause.addEventListener('click', reproducirPausar);

function reproducirPausar() {
  if(cancion.paused){
    reproducirCancion();
  } else{
    pausarCancion();
  }
  
};

function reproducirCancion(){
  cancion.play();
}
function pausarCancion(){
  cancion.pause();
}
actualizarInfoCancion();
// reproducirPausar();