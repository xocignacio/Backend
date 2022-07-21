class Usuario {                          ///// puede tener un atributo estatico
    constructor (nombre, apellido) {                               ////Construye ,    asigna valores iniciales 
        this.nombre  = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

   /*  static formulaArea = "base * altura";  */                                    //   propiedades de la clase ///  compartida por las instancias (operador new por ej) ////datos a los que necesito acceder desde cualquiera de mis objetos

    GetFullName() {                                                                 ////metodo
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {                                                           ///metodo
      this.mascotas.push(mascota);
    }
    countMascotas() {
        console.log(this.mascotas.length);
        
    }
   
    addBook(titulo, autor) {
        const libro = {titulo, autor}       
        this.libros.push(libro)
    } 
    
     getBookNames() {
        console.log (this.libros.map(libro => libro.titulo));
     }
   
}


let usuario1 = new Usuario ("nacho" , 'traba canzoniero');
const nombreUsuario = usuario1.GetFullName()
console.log(`El nombre del usuario es: ${nombreUsuario}`)
usuario1.addMascota("dinosaurio");
usuario1.countMascotas();
usuario1.addBook('Harry Potter', 'J. K. Rowling')
usuario1.addBook('Narnia', 'Random')
usuario1.addBook('Los juegos del hambre', 'Random')
usuario1.getBookNames();
