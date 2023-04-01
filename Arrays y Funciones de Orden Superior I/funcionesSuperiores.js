// FUNCIONES DE ORDEN SUPERIOR
// - Una función de orden superior es una función que puede recibir por parámetro una función o retornar una función

// function estoEsUnaFuncion(){
//     return funcion ()
// }

// function porCadaUno(array, funcion) {
//     console.log(funcion)
//     for (const el of array) {
//         funcion(el)
//     }
// }
// const numeros= [1, 2, 3, 4]

// porCadaUno(numeros, console.log)


// Métodos de búsqueda y transformación de arrays

// Hacer un constructor de productos (las propiedades más comunes: id,precio,img[puede haber varias de distintos tamaños],stock,titulo,nombre,descripción,alt,tipo/categoría)

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const productos = []

const agregarProducto = (id, nombre, precio, stock)=>{
    // crea objetos producto y los agrega al array productos 

    // usamos los datos generados apra crear un producto
    let nuevoProducto = new Producto(id, nombre, precio, stock)

    // agregar el producto al array
    productos.push(nuevoProducto)
}
agregarProducto("1", "ALFAJOR", 75, 7)
agregarProducto("2", "coca", 350, 15)
agregarProducto("3", "chicle", 200, 45)
agregarProducto("4", "palitos de la selva", 10, 500)
console.log(productos)

// forEach()
// - recorre el array y ejecuta una función por cada elemento. De los más usados.

// productos.forEach((elemento)=>{
//     console.log(elemento.nombre)
// })



// find()
// - busca un elemento del array y retorna el primer elemento que cumple con cierta condición
// - RETORNA ELEMENTO

// console.log(productos.find((elemento)=>{
//     return elemento.nombre === "ALFAJOR"
// }))

// console.log(productos.find((elemento)=>{
//     return elemento.id === "3"
// }))


// filter()
// - recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan con la condición
// - RETORNA ARRAY

// console.log(productos.filter((elementos)=>{
//     let comparacion = elementos.precio >=100 && elementos.precio <=300
//     return comparacion
// }))


// some()
// - funciona igual que filter, con la diferencia que nos retorna un booleano (true or false) si encuentra o no el elemento

// console.log(productos.some((element)=>{
//     return element.nombre === "coca"
// }))

// const arrayPrueba = ["cero", "uno", "dos", "tres"]
// console.log(arrayPrueba.some((element)=>{
//     return element === "dos"
// }))
// console.log(arrayPrueba.find((element)=>{
//     return element === "dos"
// }))
// console.log(arrayPrueba.indexOf("dos"))

// sort()
// - permite reordenar un Array segun un criterio que definamos. Podes no utilizar un parametro pero no es recomendado.
// se ponen 2 parametros, estos son los elementos a comparar
// - si el return es negativo, pone a primero el elemento 1
// - si el return es positivo, pone primero el elemento 2
// - si el return es 0 mantiene el orden
// -- (element1-element2) es de menor a mayor 
// -- (element2-element1) es de mayor a menor
//  MODIFICA EL ARRAY ORIGINAL

// productos.sort((element1, element2)=>{
//     return element2.precio - element1.precio
// })
// console.log(productos)

// sortear strings
// uno puede comparar strings con booleanos
// productos.sort((elemento1, elemento2)=>{
//     if(elemento1.nombre>elemento2.nombre){
//         return 1
//     }
//     if(elemento1.nombre<elemento2.nombre){
//         return -1
//     }
//     return 0
// })
// console.log([23, 1, 13, 553, 70])

// const arrayNumeros = [23, 1, 13, 553, 70]


// arrayNumeros.sort((element1, element2)=>{
//     return element2 - element1
// })
// // arrayNumeros.sort()
// console.log(arrayNumeros)

// map()
// - permite crear un nuevo array con todos los elementos del array, pero transformados. dDe los más usados
// console.log("numeritos:", [12, 74, 6847, -4])
// const numeritos = [12, 74, 6847, -4]

// const copiaArrayBruta = numeritos
// console.log("Bruta:", copiaArrayBruta)
// const copiaArrayMap = numeritos.map(x=>x)
// console.log("Map:", copiaArrayMap)

// const inflacion = productos.map(
//     (elemento)=>{
//         let prod = new Producto(elemento.id, elemento.nombre, elemento.precio*1.05, elemento.stock)
//         return prod
//     }
// )
// console.log(inflacion)

const soloNombres = productos.map(element=>{
    return `producto: ${element.nombre}`
})



// reduce()
// - permite obtener un único valor después de iterar sobre un array
// - parametros:
// -- valor a acumular
// -- elemento del array
// - con una , al final se pone el valor inicial del total


const carrito = []
let totalCarrito = 0

const calcularTotalCarrito = ()=>{
    totalCarrito = carrito.reduce((total, elemento)=>{
        return total + (elemento.producto.precio*elemento.cantidad)
    }, 0)
}

const agregarCarrito=(producto, cantidad)=>{
    carrito.push({producto, cantidad})
}

agregarCarrito({id: '1', nombre: 'ALFAJOR', precio: 75, stock: 7}, 4)
agregarCarrito({id: '3', nombre: 'chicle', precio: 200, stock: 45}, 1)
agregarCarrito({id: '4', nombre: 'palitos de la selva', precio: 10, stock: 500}, 20)

console.log("carrito:", carrito)
calcularTotalCarrito()
console.log(totalCarrito)





// Secuencia de fibonacci para entrevistas con recursividad
// Variaciones de esto es común en entrevistas
// calcula el número n de la secuencia de fibonacci

//  1, 1, 2, 3, 5, 8, 13
const fibonacci = (n) => {
    if (n <= 1) {
        return n
    };
    return fibonacci(n-1) + fibonacci(n-2);
}
