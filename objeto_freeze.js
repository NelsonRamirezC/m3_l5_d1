let persona = {
    nombre: "Carlos",
    apellido: "Soto"
}

persona = Object.freeze(persona);
persona.nombre = "Pedro";
persona.apellido = "Ortiz"
persona.edad = 0;
console.log(persona);