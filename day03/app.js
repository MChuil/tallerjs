/**
 * Arrays (matrices)
 * 
 */

// const numbers = new Array(9 ,2, 5,8, 88,23)
const numbers = [8, 6, 3, 6, 34, 766, 92];

const days = ['Lunes', 'Martes', 'Miercoles'];

const deTodo = ['Enero', 8874, 3.1416, true];

//Cuenta la cantidad de elementos del array
document.write(numbers.length)

days[3] = 'Jueves';
console.log(days[2]); //Miercoles

//agrega al final
days.push('Viernes');
days.push('Sabado');

//agrega al principio
days.unshift('Domingo')

console.log(days);

const cart = [];

const product = {
    descripcion : 'Tablet 10"',
    cantidad: 1,
    precio: 500
}
const product2 = {
    descripcion : 'Monitor 28"',
    cantidad: 1,
    precio: 1000
}
const product3 = {
    descripcion : 'Teclado',
    cantidad: 1,
    precio: 100
}

cart.push(product)
cart.push(product2)
cart.unshift(product3)

//eliminar 
cart.splice(0,1) //posición, la cantidad
console.table(cart)

//iterar un array forEach
days.forEach(function(day){
    document.write(`<p>${day}</p>`)
})



/**
 * ciclo for
 * 
 *  for(variable; condicion; incremento/decremento){
 *      
 *          instrucciones
 *  }
 */
let number = 15;

// for(let i = 1; i <= number; i++){
//     console.log(i);
// }

// for(let x = 15; x >= 1; x--){
//     // x = 15 -- 15>= 1 true
//     // x = 14 -- 14>= 1 true
//     // x = 1 -- 1>= 1 true
//     // x = 0 -- 0 >= 1 false
//     console.log(x)
// }

// array
// for(let i = 0; i < days.length; i++){
//     console.log(days[i]); //days[0], days[1], days[2]
// }

//imprimir los numeros pares, del 0 al 100
// for(let a = 2; a <=100; a=a+2){
//     console.log('Par', a);
// }

/**
 *  Ciclo While
 */
let i = 1;
while(i <= number){
    console.log(i);
    i++;
}


const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

// console.log(months[3])
let y = 0;
while(y < months.length){
    console.log(months[y]);
    y++;
}

//realizar un Fizz Buzz
//3,6,9,12 Fizz
//5,10,20 Buzz
//15, 30 Fizz Buzz

