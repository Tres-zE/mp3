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
