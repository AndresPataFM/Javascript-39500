// --- Objetos ---

// Hasta ahora, guardabamos los datos de esta manera

let nombreProd = "Taragüi"
let pesoProdGramos = 500
let cantidadProd = 24
let precioProdPesos = 502

// Con objetos, se puede organizar asi:

let taragui = {
    nombre: "Taragüi",
    pesoGramos: 500,
    cantidad: 24,
    precio: 502
}
function comprar(producto){
    if("precio" in producto){
        alert(`Sale $${producto.precio}`)
    } else {
        console.log("Error: el objeto no tiene precio")
    }
}
// comprar(taragui)

console.log(taragui)
// Propiedades y métodos

// Propiedades
// en terminos burdos, son variables internas del objeto que lo describen

// Crear mascota
const mascota1={
    nombre: "Roberto",
    edad: 16,
    especie: "Loro"
}
const mascota2={
    nombre: "Orion",
    edad: 12,
    especie: "Gato"
}
const mascota3 = {nombre: "Firulais",edad: 3,especie: "Perro", amigo: mascota1}

// Llamar una propiedad
// console.log(mascota1)
// console.log(mascota1.nombre)
// console.log(mascota2)
// console.log(mascota2["especie"])

mascota3.nombre = "Chimuelo" // Se pueden reasignar valores a sus propiedades por mas que tenga const

console.log(mascota3.nombre)
// mascota3= 4 // Este si es error
// Agregar propiedad a un objeto ya creado

// Métodos
// Funciones internas del objeto

const rocaMatematica = {
    sumando: (num1, num2) => num1+num2,
    restando: (num1, num2) => num1-num2
}

// rocaMatematica.restando(3,5)

// Robot cuyo único proposito es decir la fecha del día
mascota3.acariciar = function(){alert("Acariciaste a la mascota")}
// mascota3.acariciar()


const robot ={
    fechaDeNacimiento: new Date(),
    decirTiempo: ()=>{
        let tiempoActual = new Date()
        console.log(tiempoActual)
    }
}
    // robot.decirTiempo()

const claseCoder = {
    profesor: {
        nombre: "Lu",
        cursos: "DW, JS y Back End",
        estado: "descanzando"
    },
    comision: 39500,
    grabarClase: ()=>{alert("La clase se esta grabando")},
    tutorAdjunto: {
        nombre: "Andres",
        cursos: "DW, JS y React",
        estado: "ddando clase"
    },
    nombrarProfe: ()=>{
        alert(claseCoder.profesor.nombre)
    }
}
console.log(claseCoder.tutorAdjunto)
// claseCoder.grabarClase()
console.log(claseCoder.profesor.cursos)
// claseCoder.nombrarProfe()


// Crear objetos

// funciones
// clase que crea mascotas
function Mascota(nombre, edad, raza){
    this.nombre = nombre
    this.edad = edad
    this.raza = raza
    this.acariciar = ()=>alert("Acariciaste a tu mascota")
}
class MascotasClase{
    constructor(nombre, edad, raza){
        this.nombre = nombre
        this.edad = edad
        this.raza = raza
    }
    acariciar = ()=>alert("Acariciaste a tu mascota")
}
const michifus = new Mascota("Michifus", 7, "Gato")
console.log(michifus)
const perrito = new Mascota("nn", 1, "Perro")
console.log(perrito)

// se pueden usar prompts
// const michifus = new Mascota(prompt("Nombre"), 7, "Gato")
// console.log(michifus)

// clases
// clase qu crea productos

class ProductosKiosko{
    constructor(nombre, stock, precio){
        this.nombre = nombre
        this.stock = stock
        this.precio = precio*1.21
    }

} //PascalCase

const alfajor = new ProductosKiosko("Alfajor Jorgito", 20, 150)
console.log(alfajor)


//operadores IN y FOR...IN

// IN
//el operador IN nos permite saber si un objeto tiene una propiedad o no (booleanos). Me va a devolver true false. 
console.log("nombre" in alfajor)

//FOR... IN
//NOS PERMITE RECORRER LAS PROPIEDADES DE UN OBJETO.

for(propiedad in michifus){
    console.log(propiedad)
}


// Si queda tiempo extends + super en clases



// Ejemplos

const soyUnObjeto = {
    prop1: 2,
    prop2: "hola",
    prop3: {/*objeto*/},
    metodo1: ()=>{console.log("hola mundo")}
}

// func constructoras

const funcConstr = (a, b, c)=>{
    this.prop1 = a
    this.prop2 = b
    this.prop3 = c
}

const nuevoObj = new funcConstr(1,2,3)
/* nueboObj = {
    prop1:1,
    prop2:2,
    prop3:3
}*/

class producto{
    constructor(a,b,c){
        this.prop1 = a
        this.prop2 = b
        this.prop3 = c
        this.tipo = "objeto"
        this.holaMundo = ()=>{console.log("hola mundo")}
    }
}