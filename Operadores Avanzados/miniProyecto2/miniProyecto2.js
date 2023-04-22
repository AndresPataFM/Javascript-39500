// Array de productos
const productosBase = [
    {
        name:"Antipulgas Gato", 
        id:"001", 
        type:"Medicinal", 
        price:450, 
        stock:32, 
        description:"Antipulgas felino Frontline Plus"
    },
    {name:"Pelota", id:"012", type:"Juguete", price:"210", stock:9, description:"Pelota plástica hipoalergénica chillona de mascotas (díametro de 12 cm)"},
    {name:"Antiparasitario", id:"003", type:"Medicinal", price:370, stock:15, description:"Antiparasitario interno Oral Paraqueños"},
    {name:"Alimento Gato Joven", id:"004", type:"Medicinal", price:4530, stock:18, description:"Alimento para gatos Kitten de Royal Canin"}
]

// OR lógico para cargar local storage
let carrito = JSON.parse(localStorage.getItem("carrito"))|| []



const totalCarritoRender = ()=>{
    // se encarga de calcular el total del carrito
    const carritoTotal = document.getElementById("carritoTotal")
    let total = carrito.reduce((acumulador, {price, quantity})=>{
        return acumulador + (price*quantity)
    }, 0)
    carritoTotal.innerHTML=`Precio total: $ ${total}`
}

const agregarCarrito = (objetoCarrito)=>{
    // agrega productos al carrito
    carrito.push(objetoCarrito)
    totalCarritoRender()
}



const renderizarCarrito = ()=>{
    // borra el cotnenido de carrito y renderiza carrito en una lista
    const listaCarrito = document.getElementById("listaCarrito")
    // borramos para evitar clones viejos
    listaCarrito.innerHTML=""
    carrito.forEach(({name, price, quantity, id}) =>{
        let elementoLista = document.createElement("li")
        elementoLista.innerHTML=`Producto:${name} -- P/u: ${price} -- Cant.:${quantity} <button id="eliminarCarrito${id}">X</button>`
        listaCarrito.appendChild(elementoLista)
        const botonBorrar = document.getElementById(`eliminarCarrito${id}`)
        botonBorrar.addEventListener("click",()=>{
            // creo un array sin el elemento a borrar y lo igualo a carrito
            carrito = carrito.filter((elemento)=>{
                if(elemento.id !== id){
                    return elemento
                }
            })
            let carritoString = JSON.stringify(carrito)
            localStorage.setItem("carrito", carritoString)
            renderizarCarrito()
        })
        let carritoString = JSON.stringify(carrito)
        localStorage.setItem("carrito", carritoString)
    })
}

const borrarCarrito = ()=>{
    carrito = []
    let carritoString = JSON.stringify(carrito)
    localStorage.setItem("carrito", carritoString)
    renderizarCarrito()
}

const renderizarProductos = ()=>{
    // renderiza productos en el DOM
    const contenedorProductos = document.getElementById("contenedorProductos")
    productosBase.forEach(({name, id, type, price, stock, description})=>{
        const prodCard = document.createElement("div")
        prodCard.innerHTML = `
            <div class="card" style="width: 18rem;" id="producto${id}">
                <img src="./assets/${name+id}.png" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6>${type}</h6>
                    <p class="card-text">${description}</p>
                    <span>Stock: ${stock}</span>
                    <span>$ ${price}</span>
                    <form id="form${id}">
                        <label for="contador${id}">Cantidad</label>
                        <input type="number" placeholder="0" id="contador${id}">
                        <button class="btn btn-primary" id="botonProd${id}">Agregar</button>
                    </form>
                </div>
            </div>`
        contenedorProductos.appendChild(prodCard)
        const btn = document.getElementById(`botonProd${id}`)
        // Funcionalidad al boton de agregar para agregar prods al carrito
        btn.addEventListener("click",(e)=>{
            e.preventDefault()
            const contadorQuantity = Number(document.getElementById(`contador${id}`).value)
            if(contadorQuantity>0){
                agregarCarrito({name, id, type, price, stock, description, quantity:contadorQuantity})
                renderizarCarrito()
                const form = document.getElementById(`form${id}`)
                form.reset()
            }
        }) 
    })
}





const finalizarCompra = ()=>{
    // Borra el array y le da un mensaje al usuario
    borrarCarrito()
    let mensaje = document.getElementById("carritoTotal")
    mensaje.innerHTML = "Muchas gracias por su compra, los esperamos pronto"

}

// DOM
const compraFinal = document.getElementById("botonCompraFinal")
compraFinal.addEventListener("click",(()=>{finalizarCompra()}))


// Testing
renderizarProductos()
renderizarCarrito()