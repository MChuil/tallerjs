//alert('Hola Mundo desde JS');

// Este es un comentario de una sola linea

/**
 * Este es un comentario
 * de varias lineas
 * de texto
 */

// Variables
var nombre = "Juan";
let apellido = "Perez";

/**
 * Requisitos para crear variables
 *  No pueden iniciar con un numero: let 1nombre = 'Hola'
 *  No pueden iniciar con un simbolo: let @nombre = 'Hola'
 *  No puede haber espacios en blanco: let nombre completo = 'Hola'
 */

let nombre_completo = 'Juan Perez';
let nombreCompletoDelAlumno = 'Juan Perez';

nombreCompletoDelAlumno = 'Miguel Martinez';

console.log('Hola desde el Taller de JS')
console.log(nombreCompletoDelAlumno);
console.error('Esto es un error');
console.warn('Esto es una alerta');
console.info('Esto es una informacion');

let numeros;

numeros = 989;


//Constantes (No se pueden modificar)
const PI = 3.1416;
// PI = 3.141533;  esto es un error
console.log(PI);


// Tipos de datos en JS

let number = 89; //numero entero

number = 23.63 //numero decimal

number = "Hola Mundo"; //string

number = true; //boolean

let pregunta = prompt('Ingresa tu nombre');
console.log('Bienvenido ' + pregunta + ' al taller de JS')
// alert('Bienvenido ' + pregunta + ' al taller de JS');

//Template String
console.log(`Bienvenido ${pregunta} al taller de JS`);

//Operadores aritmeticos (+, -, *, /, %)
let numberOne = 9;
let numberTwo = 2;

console.log(numberOne % numberTwo);




