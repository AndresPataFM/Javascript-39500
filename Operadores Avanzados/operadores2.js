// Spread ...

// Spread en arrays

// conseguir mayor
const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92


let mayor = -Infinity
for(let i =0; i<numeros.length;i++){
    if(mayor<numeros[i]){
        mayor=numeros[i]
    }
}
console.log(mayor)

// formal el array c, agregando todos los elemntos del array a y el b
let a = ["uno", "dos"]
let b = [3, 4]
// let c = a.concat(b)
let c = [...a, ...b]

console.log(c)

// Spread en objetos
class Producto{
    constructor(nombre, id, precio){
        this.nombre=nombre
        this.id=id
        this.precio=precio
    }
}
const alfajor = new Producto("alfajor", 1, 200)
console.log("alfajor", alfajor)

const carrito = []
const agregarCarrito=()=>{
    const prodCarrito = {...alfajor, cantidad:7}
    carrito.push(prodCarrito)
    console.log("carrito", carrito)
}

agregarCarrito()


// rest parameters


// Preparando la Tercera pre entrega