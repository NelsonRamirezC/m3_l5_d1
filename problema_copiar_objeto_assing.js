let persona = {
    nombre: "Nombre por defecto",
    edad: 20,
    mascota: {
        nombre: "Mascota 1",
        edad: 1
    }
}

let pedro = Object.assign({}, persona);

pedro.mascota.nombre = "nuevo nombre de perro";

console.log("persona", persona);
console.log("pedro", pedro)