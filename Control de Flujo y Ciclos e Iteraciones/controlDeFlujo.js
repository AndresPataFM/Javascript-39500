console.log("Control de Flujos")

// Booleanos
// Tipo de dato de veracidad, puede ser:
    // true
    // false

// IF
//if es la para reservada para ver si se cumple tal o cual condición y ejecuto mi bloque de código.
// if(condicion){
    // código que ejecuto si es verdadero
// }
// let edad = Number(prompt("¿Qué edad tenes?"))

// if(edad>=18){
//     alert("Aca tenes la cerveza")
// }

// IF ELSE
// Permite con el else ejecutar código si la condicion es falsa
// let condicion = false

// if(condicion){
//     // ejecuto si verdadero
//     console.log(true)
// } else {
//     // ejecuto si false
//     console.log("es falso")
// }

// let edad = Number(prompt("¿Qué edad tenes?"))
// if(edad>=18){
//     alert("Aca esta su vinito")
// } else {
//     alert(`Al ser menor de edad con ${edad} años, te sirvo agua`)
// }


// ELSE IF
// permite cocatenar (encadenar) varios condicionales
// let condicion = false
// let condicion2 = false
// let condicion3 = false

// if(condicion){
//     // verdadero
//     console.log(1)
//     console.log("condicion es verdadero")
// } else if(condicion2){
//     // si es verdadero condicion2
//     console.log(2)
//     console.log("condicion es false y condicion2 es verdadera")
// } else if(condicion3){
//     // si es falso condicion2
//     console.log(3)
//     console.log("considion y condicion2 son falsas y 3 es verdadera")
// }

// let cola = confirm("¿Desea coca-cola?")
// let edad = Number(prompt("¿Qué edad tenes?"))

// if(cola){
//     alert("Aca esta su coca")
// } else if(edad>=18){
//     alert("Aca esta su vinito")
// } else {
//     alert(`Al ser menor de edad con ${edad} años, te sirvo agua`)
// }

// if(confirm("¿Desea coca-cola?")){
//     alert("Aca esta su coca")
// } else if(confirm("¿Desea vino?")){
//     if(Number(prompt("¿Qué edad tenes?"))>=18){
//             alert("Aca esta su vinito")
//         } else {
//             alert(`Al ser menor de edad, te sirvo agua`)
//         }
// } else {
//     alert("Aca tenes agua")
// }

// let bienVestido = confirm("¿Estás con traje y corbata?")
// if(bienVestido){
//     alert("Ingrese")
// }

// let endulzar = prompt("Desea azucar o sacarina? \n Ingrese 'a' para azucar y 'b'para sacarina")

// if('a' === endulzar){
//     alert("aca esta su azucar")
// } else if('b' === endulzar){
//     alert("aca esta su sacarina")
// } else {
//     alert("Ingreso un dato incorrecto")
// }

// numeros

// ESTO ESTA MAL, EL ELSE PELADO SIEMRPE AL FINAL
// let num = 2
// if(num === 1){
//     console.log("es 1")
// } else { 
//     console.log("no se que es")
// } else if(num ==2){
//     console.log("es 2")
// }

// switch
//  utiliza estrictamente igual para comparar datos
// switch(valor-a-analizar){
//     caso 1: ...
//           break
//     caso 2: ...
//     caso 3: ...
//     caso 4: ...
//     default:
// }

// let nombre = prompt("¿Cuál es su nombre?").toLocaleLowerCase()
// console.log(nombre)

// // Juan y Jose son hermanos y duermen en el mismo cuarto
// switch(nombre){
//     case "juan":
//         alert("Juan su cuarto es el 1A")
//     case "jose":
//         alert("Jose su cuarto es el 1A")
//         break
//     case "maxi":
//         alert("su cuarto es el 4A")
//         break
//     case "franco":
//         alert("su cuarto es el 2B")
//         break
//     case "andres":
//         alert("su cuarto es el 1B")
//         break
//     default:
//         alert("No lo tenemos registrado en el sistema, por favor verifique sus datos")
// }

// Example
// Este if con else dice si el número es par o impar o 0
// let promptSwitch = prompt("Ingrese un número entero")
// let numSwitch = Number(promptSwitch) /* Lo convierto a número */
// let resto = numSwitch % 2 /* Calcula lo que sobra de una división por 2 */
// switch(resto){
//     case 0:
//         if(numSwitch === 0){
//             alert(`El número ingresado es 0`)
//         } else {
//             alert(`El número ${promptSwitch} es un número par`)
//         }
//         break
//     case -1:
//         // Esta por si el resto es negativo
//     case 1:
//         alert(`El número ${promptSwitch} es un número impar`)
//         break
//     default:
//         alert(promptSwitch + " no es un número entero")
// }


// Operadores de comparacion

// similar == (solo valor)
// estrictamente igual === (valor y tipo)
// not ! (invierte veracidad) [es de lógica pero lo introducimos aca]
// distinto =! (solo valor)
// estrictamente distinto ==! (valor y tipo)
// a<b a es menor a b
// a<= b es menor o igual a b
// a<b a es mayor a b
// a<= b es mayor o igual a b


// Operadores lógicos

// AND
// &&
//  ambos verdaderos
// let mayorDeEdad = confirm("sos mayor de edad?")
// let vino = confirm("queres vino?")
// if(mayorDeEdad && vino){
//     alert("Aca esta el vinito")
// }

// OR
// ||
// uno o el otro es verdadero

// let agua = confirm("¿ Queres agua?")
// let coca = confirm("¿ Queres coca?")
// if(agua || coca){
//     alert("Aca esta su bevida")
// }


// Prioridades

// si no hay paréntesis, es siemrpe de izquierda a derecha
// si hay parentesis, estos se resuelven con prioridad


