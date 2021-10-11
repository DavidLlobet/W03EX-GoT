class Luchador extends Personaje {
  constructor(nombre, familia, edad, armaQueUsa, destreza) {
    super(nombre, familia, edad);
    this.reinado = reinado;
    this.armaQueUsa = armaQueUsa;
    this.destreza = destreza;
  }

  comunicar() {
    return "Primero pego y luego pregunto"
  }
}
