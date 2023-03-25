// Simular el portal de un profesor de escuela

let ingreso = false

function login(){
    // nuestro log in
    const contrasenia = "123"
    const profesor = "andres"
    let profesorIngresado = prompt("Ingrese su nombre")
    let profesorLower = profesorIngresado.toLocaleLowerCase()
    let constraseniaIngresada = prompt("ingrese la contrasenia")
    if((profesor === profesorLower)&&(contrasenia===constraseniaIngresada)){
        alert("Bienvenido")
        ingreso=true
    }
}
function calcularPromedio (){
    // calcula el promedio de todos los alumnos
    let agregarAlumno = true
    let alumnos = 0
    let sumaTotal = 0
    while(agregarAlumno){
        alumnos++
        //  alumnos = alumnos+1
        let nota = Number(prompt(`Ingrese la nota del alumno ${alumnos}`))
        sumaTotal += nota
        agregarAlumno = confirm("Hay más alumnos?")
        // sumaTaotal = sumaTotal + nota
    }
    alert(`El promedio total de los ${alumnos} alumnos es: ${sumaTotal/alumnos}`)
}

const inicializar = ()=>{
    login()
    if(ingreso){
        calcularPromedio()
        // calcularSueldomensual()
        // ingresarReportes()
    }
}

inicializar()