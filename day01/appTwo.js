let producto = 'Laptop de 15.6 pulgadas';

console.log('Total de letras', producto.length);

// includes  - buscar una palabra en un string

console.log(producto.includes('pulgadas'))

// indexOf - buscar la posicion de una palabra en un string
console.log(producto.indexOf('pulgadas'))


//trim - elimina los espacios en blanco al inicio y al final
let palabra = '    hola mundo    ';
console.log(palabra.trim());

// replace - reemplaza una palabra por otra
console.log(producto.replace('Laptop', 'Monitor'));

// substring - extrae los caracteres de una cadena de acuerdo a los parametros que le pasemos
let texto = 'Aprendiendo Javascript';
console.log(texto.substring(0, 1));

 // repeat - repite una cadena de texto
let asterisco = '*';
console.log(asterisco.repeat(15));

// split - divide una cadena de texto
let hobbies = 'Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(', '));

let fecha = '06/11/2023';
console.log(fecha.split('/'));

// let correo = prompt('Ingrese su correo');
// toLowerCase - convierte un string a minusculas
// console.log(correo.toLocaleLowerCase());

//toUpperCase - convierte un string a mayusculas
// console.log(correo.toLocaleUpperCase());

// Convertir numeros a string
let numero = 10;
console.log(numero);

console.log(numero.toString());


// Metodos de los numeros
let pi = Math.PI;
console.log(pi);

// Redondear
console.log(Math.round(pi));

console.log(Math.round(9.5))
console.log(Math.round(9.4))

//redondear hacia arriba
console.log(Math.ceil(0.1));

//redondear hacia abajo
console.log(Math.floor(99.99));

// Raiz cuadrada
console.log('Raiz cuadrada', Math.sqrt(144));

// Potencia
console.log('Potencia', Math.pow(6, 2));

// Numero aleatorio
console.log('Numero aleatorio', Math.round(Math.random() * 1000));

// Convertir string a numero
let cantidad = '100';
console.log('Cantidad', Number(cantidad));


//Operadores de comparación
/**
 * == igual
 * === estrictamente igual
 * != diferente
 * !== estrictamente diferente
 * > mayor que
 * < menor que
 * >= mayor o igual que
 * <= menor o igual que
 *
 */

console.log(9>7);
console.log(122<= 1220); // true

let numberOne = '15'
let numberTwo = 15;

console.log('Resultado: ', numberOne === numberTwo);

let num1 = '8';
let num2 = 8;
console.log('Resultado: ', num1 !== num2);





