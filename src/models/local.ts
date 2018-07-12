export class Local{

    nome:string;
    latitude:string;
    longitude:string;

    constructor(nome:string,latitude:string,longitude:string){
        this.nome = nome;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    setNome(nome:string){
        this.nome = nome;
    }
    setLatitude(latitude:string){
        this.latitude = latitude;
    }
    setLongitude(longitude:string){
        this.longitude = longitude;
    }
    getNome(){
        return this.nome;
    }
    getLatitude(){
        return this.latitude;
    }
    getLongitude(){
        return this.longitude;
    }

}