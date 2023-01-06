let persona = {
    nombre: "",
    edad: 0,
    genero: "",
    saludar() {
        console.log("Hola mi nombre es, " + this.nombre)
    }
}

let hombre = Object.create(persona)

let mujer = Object.create(persona)
hombre.futbol = "juega futbol";

mujer.basketball= "juega basketball";

mujer.nombre= "Maria"
mujer.saludar()