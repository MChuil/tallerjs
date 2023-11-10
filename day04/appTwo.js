/**
 * Funciones
 * 
 *  function nombreDeLaFunction(){
 *      instrucciones
 *  }
 * 
 */

function saludo(){
    let input = document.querySelector('#recuadro')
    console.log(input.value)
    
    let hi = document.querySelector('#hola')
    hi.textContent = `Hola ${input.value}!`
    
    input.value = ''
}


function calcular(){
    let numberOne = document.querySelector('#numberOne')
    let numberTwo = document.querySelector('#numberTwo')

    if(numberOne.value == '' || numberTwo.value == ''){
        alert('Faltan datos')
    }else{
        const sum = Number(numberOne.value) + Number(numberTwo.value)
    
        let resultado = document.querySelector('#resultado')
        resultado.textContent = `El resultado es: ${sum}`
    
        numberOne.value = ''
        numberTwo.value = ''
    }

}