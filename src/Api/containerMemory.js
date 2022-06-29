class ContainerMemory {
    constructor() {
      this.elements = [];                       ////// almaceno dentro del constructor para tener un array para cada instancia
    }
  
    getAll() {
      return this.elements;                           ////// devuelve todos los elementos 
    }
  
    getById(id) {
      const element = this.elements.find((e) => e.id == id);     //// si el id es igual al id recibido por parametro, si es asi lo guarda en element 
  
      return element;
    }
  
    save(element) {                                        
      element.id =
        this.elements.length === 0                  ////// si no hay elemento el id va a tener un 1
          ? 1
          : this.elements[this.elements.length - 1].id + 1;
  
      this.elements.push(element);                ///// pusheo el elemto al array del constructor 
  
      return element;                             ///// devuelvo el id
    }
  
    updateById(id, newData) {                        //// recibo el id y nuevos datos 
      const elementIndex = this.elements.findIndex((e) => e.id == id);  //// recorro todos los elementos, si el elemnto no existe devuelve un -1
  
      if (elementIndex === -1) return { error: true };     ///// si es -1 devuelvo un error 
  
      this.elements[elementIndex] = {                ////// accedo al producto, y le asigno un nuevo objeto con nuevos datos 
        ...this.elements[elementIndex],
        ...newData,
      };
  
      return this.elements[elementIndex];              //////devuelvo el objeto nuevo 
    }
  
    deleteById(id) {                                            
      const elementIndex = this.elements.findIndex((e) => e.id == id);
  
      if (elementIndex === -1) return { error: true };            ///// en el caso que no exista mando error 
  
      this.elements = this.elements.filter((e) => e.id != id);    //// filter compara la condicion que tiene adentro que cada elemento que tenga un id distinto lo devuelve en un un nuevo array asignado en element (crea un nuevo array, no modifica el original)
  
      return { error: false };
    }
  }
  
  export { ContainerMemory };  /// agrego type module en el package.json para exportalo
  
  