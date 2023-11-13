let articulos = [];  //arreglo vacio


function addProduct(id){ //id = 3
    let card = document.querySelector(`#card-${id}`)
    
    const detalle = {
        id: id,
        imagen: card.querySelector('img').src,
        titulo: card.querySelector('h4').textContent,
        precio: card.querySelector('span').textContent,
        cantidad: 1
    }

    // let ejemplo = {} Objeto
    // let ejemplo = [] Array
    if(articulos.length == 0){ //si el array esta vacio
        articulos.push(detalle); //agregando el objeto al array
    }else{ //si no esta vacio
        //buscar que en el array no exista ese producto
        let existe = false;
        articulos.forEach(function(row){
            if(row.id == id){  //si existe
                existe = true;
            }
        })

        if(existe == true){
            articulos.forEach(function(row){
                if(row.id == id){  //si existe
                    row.cantidad += 1;
                }
            })
        }else{
            articulos.push(detalle); //agregando el objeto al array
        }
    }
    let listaCarrito = document.querySelector('#lista-carrito')
    let tbody = listaCarrito.querySelector('tbody')
    tbody.textContent = ''
    articulos.forEach(function(row){
        let fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src='${row.imagen}' width='80'>
            </td>
            <td>${row.titulo}</td>
            <td>${row.precio}</td>
            <td>${row.cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' onclick='eliminar(${row.id})'>x</a>
            </td>`
            tbody.appendChild(fila)
    })

    document.querySelector('#count').textContent = articulos.length
}

function eliminar(id){
    let newArray = articulos.filter(function(row){
        if(row.id != id){
            return row
        }
    })
    articulos = newArray;
    let listaCarrito = document.querySelector('#lista-carrito')
    let tbody = listaCarrito.querySelector('tbody')
    tbody.textContent = ''
    articulos.forEach(function(row){
        let fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src='${row.imagen}' width='80'>
            </td>
            <td>${row.titulo}</td>
            <td>${row.precio}</td>
            <td>${row.cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' onclick='eliminar(${row.id})'>x</a>
            </td>`
            tbody.appendChild(fila)
    })
    document.querySelector('#count').textContent = articulos.length
}

function deleteCar(){
    //borrar el array
    articulos = [];
    //borrar el contenido del tbody
    let listaCarrito = document.querySelector('#lista-carrito')
    let tbody = listaCarrito.querySelector('tbody')
    tbody.textContent = ''
    document.querySelector('#count').textContent = 0
}