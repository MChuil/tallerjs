/**
 * Objetos en JS------------
 */

let producto = 'Laptop 13"';
let marca = "Huawei";
let precio = 900;
let existencia = 5;
let promocion = true;

//Objeto agrupa todo en una sola variable

//Object Literal
const product = {
    descripcion : 'Laptop 13"',
    marca : "Huawei",
    precio : 900,
    existencia : 5,
    promocion : true
}

console.log(product) //todo el objeto
console.log(product.descripcion) //una propiedad

//agregamos propiedades a un objeto existente
product.descuento = 20;
product.color = 'Plata'

//eliminar propiedades de un objeto
delete product.marca

console.log(product)

// Objeto dentro de otro Objeto
const cv = {
    nombre: 'Rene Higuita',
    edad: 20,
    telefono: "(123)89456789",
    domicilio: "Bogota, Colombia",
    correo: "higuita@hotmail.com",
    datosAcademicos : {
        primaria: {
            nombre : 'America',
            year: '1970 -1976'
        },
        secundaria: {
            nombre: 'Mexico',
            year: '1976-1979'
        }
    },
    datosLaborales :{
        empresa1: {
            nombre : 'Seleccion',
            domicilio: 'Conocido',
            puesto: 'Portero'
        },
        empresa2: {
            nombre : 'Seleccion',
            domicilio: 'Conocido',
            puesto: 'Portero'
        },
        empresa3: {
            nombre : 'Seleccion',
            domicilio: 'Conocido',
            puesto: 'Portero'
        }
    }
}


console.log(cv.datosAcademicos.secundaria)

cv.datosAcademicos.primaria.direccion = "Conocido por todos"
cv.datosAcademicos.secundaria.direccion = "Conocido por todos"


delete cv.datosLaborales.empresa1
console.log(cv)


// metodos (funciones) dentro de Objetos

const cliente = {
    nombre : 'Hugo Sanchez',
    domicilio : 'CD México, CU',
    telefono: "55123456789",
    info : function(){
        // console.log('Hola soy ' +  this.nombre + ', vivo en ' + this.domicilio + ' y mi numero de telefono es ' + this.telefono)
        console.log(`Hola soy ${this.nombre}, vivo en ${this.domicilio} y mi numero de telefono es ${this.telefono}`)
    },
    suma: function(num1, num2){
        console.log( num1 + num2)
    }
}

cliente.info()
cliente.suma(9,11)

document.write("Hola Mundo...")