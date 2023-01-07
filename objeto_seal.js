let persona = {
    nombre: "Carlos",
    apellido: "Soto"
}

persona = Object.seal(persona);
persona.nombre = "Pedro";
persona.apellido = "Ortiz"
persona.edad = 0;
console.log(persona);