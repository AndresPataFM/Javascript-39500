// ARRAYS

// Qué son
// Es un tipo de dato que sirve para almacenar valores en forma de lista. Sería como una colección de variables

// []
const array = [
    "hola",
    123,
    "mundo",
    true,
    false,
    1.23
]

const array2 = [123, "array en linea", false]

// Cada elemento tiene un índice

// mostrar un elemento específico
array[0] //"hola"

// for y arrays
// sabiendo de antemano el alrgo
// for(let i =0; i<3;i++){
//     console.log(array[i])
// }
// 
// console.log("Largo de array",array.length)
// for(let i=0; i<array.length;i++){
//     console.log(array[i])
// }

// x++
// x = x+1



// METODOS DE ARRAY
// https://i.redd.it/s8ev4pw1p4a61.jpg
// https://media.licdn.com/dms/image/C4D22AQExsIbewfSCLQ/feedshare-shrink_800/0/1679073502731?e=1682553600&v=beta&t=fiIv5qNmL8adDBnNfouDKHHlFTuA2uu8m-7ql_RLoaY

const verduleria = ["🍒","🍆","🍌","🍅",'🥒']
// console.log(verduleria)
// Agregan un elemento

// - push()
// -- agrega elementos al final del array
// verduleria.push("🍉")
// console.log(verduleria)

// - unshift()
// -- agrega elementos al principio del array
// verduleria.unshift("🥕")
// console.log(verduleria)

// Quitan un elemento

// - pop()
// -- elimina el último elemento del array
// verduleria.pop()
// console.log(verduleria)

// - shift()
// -- elimina el primer el elemento de array
// verduleria.shift()
// console.log(verduleria)


// splice()
// - elimina uno o VARIOS elementos de un array
// recibe 2 parametros
// - el 1ro es el indice a "cortar"
// - el 2do es cuantos elementos "cortamos"
// verduleria.splice(2,3)
// console.log(verduleria)

// silce() //se utiliza MUCHO mas map()
// - elimina uno o VARIOS elementos de un array
// recibe 2 parametros
// - el 1ro es el indice a copiar
// - el 2do es cuantos elementos copiar (hace siempre 1 menos)
// NO MODIFICA EL ARRAY INICIAL 
// console.log(verduleria.slice(1,4))
// console.log(verduleria)

// join()
// - genera un string con todos los elementos del array
// - NO MODIFICA EL ARRAY ORIGINAL
// verduleria.join(", ")
// console.log(verduleria.join(", "))
const alumnos = ["Daniel", "Iván", "Ruben"]
// console.log(alumnos.join())
let alumnosString = alumnos.join("\n")
// alert(alumnosString)
// console.log(alumnos.join("||"))



// concat()
// - une dos arrays, retornando uno nuevo
const carne = ["🥩", "🍖", '🍗']
const alimentos = verduleria.concat(carne)
// console.log(alimentos)
// console.log(verduleria)

// indexOf()
// - retorna el índice de un elemento
// - NO MODIFICA EL ARRAY ORIGINAL

// console.log("indice de 🍌",verduleria.indexOf("🍌"))
// console.log("indice de 54",verduleria.indexOf("54"))


// const a = [123, 24, -648]
// console.log("indice de 24",a.indexOf(24))


// includes()
// - retorna un booleano si encuentra el elemento
// - NO MODIFICA EL ARRAY ORIGINAL
// console.log("includes 🍌",verduleria.includes("🍌"))
// console.log("includes 🍟",verduleria.includes("🍟"))


// reverse()
// - invierte los elementos del array

// verduleria.reverse()
// console.log(verduleria)


// for of

for(const verdura of verduleria){
    console.log(verdura)
}

// EJEMPLOS

// const listaNombres = [];
// let   cantidad     = 5;
// //Empleo de do...while para cargar nombres en el array por prompt()
// do{
//     let entrada = prompt("Ingresar nombre");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)
// //Concatenamos un nuevo array de dos elementos
// const nuevaLista = listaNombres.concat(["ANA","EMA"]);
// //Salida con salto de línea usando join
// alert(nuevaLista.join("\n"));

// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// // recibo el elemento a borrar por parámetro
// const eliminar = (nombre) => {
//     // busco su índice en el array
//     let index = nombres.indexOf(nombre)

//      // si existe, o sea es distinto a -1, lo borro con splice
//     if (index != -1 ) {
//         nombres.splice(index, 1)
//     } 
// }

// eliminar('Pedro')

class Producto{
    constructor(id, nombre, precio, stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const productos = []

const agregarProducto = ()=>{
    // crea objetos producto y los agrega al array productos 

    // pedimos los datos al cliente
    let nuevoId = prompt("ingresar el id del producto")
    let nuevoNombre = prompt("ingresar el nombre del producto")
    let nuevoPrecio = Number(prompt("ingresar el precio del producto"))
    let nuevoStock = Number(prompt("ingresar el stock del producto"))

    // usamos los datos generados apra crear un producto
    let nuevoProducto = new Producto(nuevoId, nuevoNombre, nuevoPrecio, nuevoStock)

    // agregar el producto al array
    productos.push(nuevoProducto)
}

let condicionalBucle = true

function iniciarPrograma(){
    while(condicionalBucle){
        let pregunta = confirm("¿Desea agregar un producto?")
        if(pregunta){
            agregarProducto()
            console.log(productos)
        }
        condicionalBucle = confirm("¿Desea agregar más productos?")
    }
}

// iniciarPrograma()
