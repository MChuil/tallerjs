/**
 * Sentencias condicionales
 * Sirven para controlar el flujo del programa.
 * 
 * Estructura IF...ELSE
 * Sintaxis:
 *  if(tal cosa es verdadera){
 *      hagas esto
 *  }si no{
 *      has esto otro
 * }
 * >
 * < 
 * >=
 * <=
 * !=
 * ==
 */

let number = 16.8

if(number > 10){
    console.log('Es mayor')
}else{
    console.log('no es mayor')
}

// let sex = prompt('¿Cual es tu sexo? (F/M)')

// if(sex.toLowerCase() == 'f'){
//     alert("Femenino")
// }else if(sex.toLowerCase() == 'm'){ 
//     alert('Masculino')
// }else{
//     alert('HORROR, no se reconoce el sexo');
// }

// switch (sex.toLowerCase()) {
//     case 'f':
//         alert('Femenino')
//         break;
//     case 'm':
//         alert('Masculino');
//         break;
//     default:
//         alert('HORROR, no se reconoce el sexo');
//         break;
// }

const salary = prompt('¿Cual es tu salario mensual (USD)')

/**
 *  Si el Salario es menor o igual  a los 200usd, el mensaje es= 'Salario Minimo'
 *  Si el salario es mayor de 200usd y menor o igual de 600usd  = 'Salario Bajo Alto'
 *  Si el salario es mayor de 600usd y menor o igual de 2000usd = 'Salario Medio'
 *  Si mayor de 2000usd y menor o igual de 4500usd = 'Salario Alto'
 *  Si es mayor de 4500usd = 'Super Salario'
 */

console.log(Number(salary))
if(Number(salary)){
    // Operador AND (&&) y OR (||)
    if(salary <= 200){
        alert('Salario Minimo')
    }else if(salary >200 && salary<=600){
        alert('Salario Bajo Alto')
    }else if(salary >600 && salary <=2000){
        alert('Salario Medio')
    }else if(salary >2000 && salary <= 4500){
        alert('Salario Alto')
    }else if(salary >4500){
        alert('Super Salario')
    }
}else{
    alert('Valor introducido es incorrecto');
}




/**
 * Switch
 * 
 * switch(condicion){
 *      case 'valor':
 *          instruccion
 *          break;
 *      case 'valor':
 *          intruccion
 *          break;
 *      default:
 *         instruccion
 *          break;
 * }
 */



