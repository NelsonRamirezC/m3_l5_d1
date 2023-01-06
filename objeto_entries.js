let animal = {
    nombre: "Perro",
    raza: "Pastor Alemán",
    edad: 10
}

let entradas = Object.entries(animal);
console.log(entradas)
//PRIMERO RECORRE ARRAY PRINCIPAL
/* for(let i = 0; i< entradas.length; i++){
    let arrayInterno = entradas[i]

    //RECORRE CADA UNO DE LOS ARRAYS AL INTERIOR DEL ARRAY PRINCIPAL
    for(let j = 0; j< arrayInterno.length; j++){
        console.log(arrayInterno[j])
    }
    console.log("iteración principal terminada")
}
console.log("ciclo terminado")
 */

/* entradas.forEach(matriz =>
    matriz.forEach(dato => console.log(dato))
) */