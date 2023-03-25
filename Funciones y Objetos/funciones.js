// Que son?
// Un bloque de código/sentencia que puede se ejecuta cada vez que se llama

// -- Declarar --
// function nombre(){
//     // sentencia a ejecutar
//     // return
//     // el return es si se desea devolver un dato
// }

// Famoso hola mundo

// function holaMundo(){
//     console.log("Hola Mundo")
// }

function holaMundoReturn(){
    const stringHola = "Hola Mundo"
    return stringHola
}


// function nombre(parametro1, parametro2, ..., parametroX){
//     // los parámetros no son obligatorios dependiendo de lo deseado.
//     // sentencia a ejecutar
//     // return Y
// }

// Calculadora | Saludar con nombre | tabla de multiplicacion
function calculadora(a,b,operacion){
    console.log(a,b,operacion)
    if(operacion==="+"){
        let suma = a + b
        return suma
    } else if (operacion==="-"){
        let resta = a - b
        return resta
    }
}

calculadora(2,3,"-")
calculadora(4,3,"-")
calculadora(5,6,"+")
calculadora(2,3,"-")
calculadora(2,123,"+")
calculadora(5402,34,"-")

function tablaMultiplicacion(num1){
    for(let i = 0; i<=num1; i++){
        for(let j = 0; j<=num1; j++){
            console.log(`${i} x ${j} = ${i*j}`)
        }
    }
}



// let hola = holaMundo()
// let dosMasCinco = calculadora(2,5)
// console.log(hola)
// console.log(dosMasCinco)


// -- Llamar --
// sin parametros
// nombre()
// con parametros
// nombre(parametros)


// -- SCOPE --


//  -- Funciones anónimas

const multiplicador = function(a,b){
    return a*b
}

// console.log(multiplicador(2,3))


// -- Función flecha --

// const nombre = (parametros) =>{
//     // código a ejecutar
// }

// Attaque en D&D
const chancePegar = (defensa)=>{
    let paraPegar = Math.floor(Math.random()*20)+1
    return paraPegar>=defensa
}
const calcularDanio = (danio) =>{
    let danioRandom = Math.floor(Math.random()*danio)+1
    return danioRandom
}
const ataqueEspada = (defensa,danio)=>{
    if(chancePegar(defensa)){
        alert(`Le pegaste por ${calcularDanio(danio)} al enemigo`)
    } else {
        alert("Le erraste")
    }
}
ataqueEspada(10, 10)

// return implicito
// const nombre = (parametros) => // código a retornar

// Corrector de multiplicacion (numeros a multiplicar + rta alumno)

const corrector = (num1, num2, rtaAlumno)=>num1*num2===rtaAlumno
const sumando = (num1, num2) => num1+num2

// console.log(sumando(2,3))

// console.log(corrector(2,3,6)) //true
// console.log(corrector(5,5,24)) //false

// parametro único
// const nombre = parametro => // código a retornar

// Divisible por tres
const divisibleEnTres = num1 => num1%3===0
// console.log(divisibleEnTres(5))
// console.log(divisibleEnTres(7))
// console.log(divisibleEnTres(9))
// console.log(divisibleEnTres(12731842678))

// -- PARADIGMAS, convenciones, conceptos y buenas prácticas --

// DRY - Dont Repeat Yourself
// KISS - Keep It Simple Stupid
// YAGNI - You Aint Gonna Need It

// Funcional vs Procedimental
// Abstracción
// Expresividad
// Modularidad

// -- Ver errores --

// Caja Negra: ver los datos que ingresan y los datos que salen
// Caja Blanca: ver el proceso independientemente del input
