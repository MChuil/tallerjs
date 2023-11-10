// let title = document.querySelector('#titulo')
// title.textContent  = 'Taller de JavaScript'

// let paragraph = document.querySelector('.parrafo')
// paragraph.textContent = '<u>Dia 04, día final</u>'

// let paragraphTwo = document.querySelector('.parrafo2')
// paragraphTwo.innerHTML = '<u>Dia 04, día final</u>'

// //crear una tabla
// let table = document.querySelector('#tabla')
// table.innerHTML = `<table>
//     <thead>
//         <tr>
//             <th>Nombre</th>
//             <th>Correo</th>
//         </tr>
//     </thead>
//     <tbody>
//         <tr>
//             <td>Jiram</td>
//             <td>jiram@gmail.com</td>
//         </tr>
//         <tr>
//             <td>Alex</td>
//             <td>alex@gmail.com</td>
//         </tr>
//         <tr>
//             <td>Luis</td>
//             <td>luis@gmail.com</td>
//         </tr>
//         <tr>
//             <td>David</td>
//             <td>david@gmail.com</td>
//         </tr>
//     </tbody>
// </table>`

let name = prompt('¿Cual es tu nombre?')
let bienvenida = document.querySelector('#titulo')
// bienvenida.textContent = 'Bienvenido ' + name + ' al Taller de JavaScript'
bienvenida.textContent = `Bienvenido ${name} al Taller de JavaScript`