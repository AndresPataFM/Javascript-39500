console.log("Ciclos e Iteracion")

// Ciclos/Bucles?Iteraciones
// son códigos que se ejecutan mientras se cumpla una condicion

// ¿Qué es? 


// Tipos

// Conteo
// Condicionales

// Cuidado, evitar ciclos infinitos


// FOR
// for(desde; hasta; actualización){
    // código que se ejecuta por cada ciclo
// }

// for(let i = 0; i<=10000; i = i+1){
//     console.log(i)
// }

// calculador de promedios
// 5 alumnos en el curso
// let total = 010

// for(let i = 0; i<5; i = i+1){
//     let pregunta = Number(prompt(`Ingrese la nota del alumno ${i}`))
//     console.log(`Nota del alumno ${i+1}:`, pregunta)
//     total = total + pregunta
// }
// let promedio = total/5
// console.log("promedio", promedio)

// WHILE
// while(condicion){
//     código a ejecutar
// }
// let saludo = true
// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }
// let parar = false
// while(!parar){
//     console.log("no paro")
//     parar = confirm("¿Paro?")
// }
// let ahorrando = true
// let bolsillo = 10000
// let ahorros = 0
// while(ahorrando){
//     let meter = Number(prompt(`Cuanto dinero desea ahorrar en dolares? Tiene:\n Bolsillo: ${bolsillo} \n Ahorrado: ${ahorros}`))
//     if((meter !== NaN) && (meter<=bolsillo)){
//         ahorros= ahorros+meter
//         bolsillo = bolsillo - meter
//     } else {
//         alert("Ingreso datos incorrectos")
//     }
//     ahorrando = confirm(`¿Desea seguir ahorrando?`)
// }
// Ciclo infinito, explota todo
// while(true){
//     alert("hola")
// }


// DO...WHILE
// do{
//     //código a ejecutar por ciclo
// } while(condicion)

// let saludo = false
// let despedida = false
// while(saludo){
//     alert("¡HOLA!😀")
//     saludo = confirm("¿Otro saludo?")
// }

// do{
//     alert("¡Chau!😥")
//     despedida = confirm("¿Otra despedida?")
// } while(despedida)
// let contrasenia = "qwerty"
// let input = ''
// do{
//     input = prompt("Ingrese su contraseña")
// }while(input !== contrasenia)

let contrasenia = "qwerty"
let input = ''
let intentos = 0

do{
    input = prompt("Ingrese su contraseña")
    intentos++ //contador = contador+1
    if(intentos<3){
        alert(`Te quedan ${3-intentos} intentos de 3`)
    } else {
        alert("Te quedaste sin intentos")
    }
}while((input !== contrasenia)&&(intentos<3))

