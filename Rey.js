class Rey extends Personaje {
  constructor(nombre, familia, edad, reinado) {
    super(nombre, familia, edad);
    this.reinado = reinado;
  }

  comunicar() {
    return "Vais a morir todos"
  }
}