export default class Personajes {
    constructor(id){
        let _id = id;
        this.getId = () => _id;
        this.setId = (new_id) => _id = new_id;
    }
    get id(){
        return this.getId();
    }
    set id(new_id){
        this.setId(new_id);
    }
};