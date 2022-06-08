const nombre = "pepe" ;
const edad = 25;
const precio = 99.90;
const series = ["dark", "mr Robot", "castlevania"] /* aarray de string */

const pelis = [nombrePeli= "", estreno= ""]  // array string


class Rectangulo {
    constructor (largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }

    static formulaArea = "base * altura"; // compartida por las instancias

    mostrarArea() {
        console.log("Area: " + this.largo * this.ancho);
    }

    mostrarFormula() {
        console.log("Formula: " + Rectangulo.formulaArea);
    }
}

// let rec1 = new Rectangulo(5,5);
// rec1.mostrarArea();

// rec1.largo = 10;
// rec1.mostrarArea();

// let rec2 = new Rectangulo(2,3);
// rec2.mostrarArea();

// rec1.mostrarFormula();
// rec2.mostrarFormula();

console.log(Rectangulo.formulaArea);