import { Local } from './local';

export class Curso{
    private codigo:number;
    private nome:string;
    private local:Local;

    constructor(codigo:number,nome:string,local:Local){
        this.codigo = codigo;
        this.nome = nome;
        this.local = local;        
    }

    setCodigo(codigo:number){
        this.codigo = codigo;
    }
    setNome(nome:string){
        this.nome = nome;
    }
    setLocal(local:Local){
        this.local = local;
    }

    getCodigo(){
        return this.codigo;
    }
    getNome(){
        return this.nome;
    }
    getLocal(){
        return this.local;
    }
}