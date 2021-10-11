class Personaje {
  nombre;
  familia;
  edad;
  estado = "vivo";

  constructor(nombre, familia, edad) {
    this.nombre = nombre;
    this.familia = familia;
    this.edad = edad;
    this.estado;
  }
}

class Rey extends Personaje {
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.reinado = reinado;
  }

  comunicar() {
    return "Vais a morir todos"
  }
}

const a = new Rey("Joffrey", "Baratheon", 12, 2,);

console.log(a);