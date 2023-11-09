/**
 * para seleccionar id se usa #
 * para seleccionar clases se usa el .
 */

const titulo = document.querySelector('#titulo')
console.log(titulo)
titulo.textContent = 'Hola Mundo desde JS'
titulo.style.color ='white'
titulo.style.background = 'blue'

let parrafo = document.querySelector('#parrafo1')
console.log(parrafo)

const texto = document.querySelector('.texto')
console.log(texto)

const arrayTexto = document.querySelectorAll('.texto');
console.log(arrayTexto[1])

const div = document.querySelector('div')
console.log(div.textContent) //leo lo que tiene el div
// div.textContent = '<h1>Tercer dia del Taller de JS</h1>'
div.innerHTML = '<h1>Tercer dia del Taller de JS</h1>'
div.style.color = 'green'