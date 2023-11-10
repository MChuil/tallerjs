let articulos = [];


function addProduct(id){
    let card = document.querySelector(`#card-${id}`)
    console.log(card)

    const detalle = {
        id: id,
        imagen: card.querySelector('img').src,
        titulo: card.querySelector('h4').textContent,
        precio: card.querySelector('span').textContent,
        cantidad: 1
    }

    articulos.push(detalle)

    let listaCarrito = document.querySelector('#lista-carrito')
    listaCarrito.querySelector('tbody').innerHTML = ''
    articulos.forEach(function(item){
        let fila = document.createElement('tr')
        fila.innerHTML = `
            <td>
                <img src='${item.imagen}' width='80'>
            </td>
            <td>${item.titulo}</td>
            <td>${item.precio}</td>
            <td>${item.cantidad}</td>
            <td>
                <a href='#' class='borrar-curso' onclick='eliminar(${item.id})'>x</a>
            </td>`
        listaCarrito.appendChild(fila)
    })
    console.log(articulos)
}