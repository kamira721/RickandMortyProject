import Personajes from './personajes.js';


export default class DetallesPersonajes extends Personajes {
    constructor(id,name,species){
        super(id);
        let _name = name;
        this.getName = () => _name;
        this.setName = (new_name) => _name = new_name;

        let _species = species;
        this.getSpecies = () => _species;
        this.setSpecies = (new_species) => _species = new_species;
        
        
    }
    get name(){
        return this._getName();
    }
    set name(new_name){
        this._setName(new_name);
    }
    get species(){
        return this.getSpecies();
    }
    set species(new_species){
        this._setSpecies(new_species);
    }
    
    

    infoGeneral(){
        return `
            <ul>
                <li><span>${this.id}</span></li>
                <li><span>${this.species}</span></li>
            </ul>
        `
    }
}