const fs = require('fs');

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