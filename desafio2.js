const fs = require('fs')

class Container {
    constructor (desafio){
        this.desafio = desafio
    }

    async save(obj){
        const objs = await this.getAll();
        let newId;

        if (objs.length == 0){
            newId = 1;
        } else {
            newId = objs[objs.length - 1].id + 1;
        }

        const newObj ={...obj , id: newId}
        objs.push (newObj);
        
        try {
           await fs.writeFile(this.desafio, JSON.stringify(objs,null,2));
            return newId
        } catch (error) {
            throw new Error (`Se detecto error al guardar:${error}`);
        }
    }

    async getById(id) {
        const objs = await this.getAll();
        const obj = objs.find(x => x.id == id);
        return obj;
    }
  
    async getAll(){
        try {
            const objs = await fs.readFile(this.desafio,'utf-8');
            return JSON.parse(objs);
            
        } catch (error) {
            return []
        }
    }
    
}

const product1 =    {
    title: "Cerveza IPA",
    price: 350,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20ipa.jpg?alt=media&token=dc05d263-b038-4322-977b-0ce265c8a64d",
    id: 1
}

const product2 =    {
    title: "Cerveza RED",
    price: 300,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/andes%20roja.jpg?alt=media&token=432f65f2-27ad-4893-8dee-235637b262ed",
    id: 2
}
  
const product3 =   {
    title: "Cerveza HONEY",
    price: 300,
    thumbnail: "https://firebasestorage.googleapis.com/v0/b/beerscript-ebe0f.appspot.com/o/honey.jpg?alt=media&token=996e450e-ba74-462c-abc3-84b4d560d1db",
    id: 3
}


async function desafio2 (){

    const contenedor = new Container('./productos.txt');
}

desafio2()