let animal = {
    raza: "Siberiano",
    edad: 10,
}

let mascota = {
    nombre: "Don gato",
    propietario: "Carlos"
}

let animal2 = Object.assign({}, animal);

animal2.collar = "collar de bolitas";

console.log(animal)
console.log(animal2)

/* animal = Object.assign(animal, mascota);
console.log("Animal", animal);
console.log("Mascota", mascota) */;