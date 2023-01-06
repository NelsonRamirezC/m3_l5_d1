let animal = {
    nombre: "Perro",
    raza: "Pastor Alemán",
    edad: 10
}

let keys = Object.keys(animal)
console.log(keys)

/* keys.forEach(key => {
    console.log(animal[key])
}) */

/* for(let i = 0; i< keys.length; i++){
    let llave = keys[i]
    console.log(animal[llave])
} */

for (const key in animal) {
    console.log(animal[key])
}