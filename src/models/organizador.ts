export class Organizador{

    private codigo_evento:number;
    private codigo_usuario:number;
    constructor(codigo_evento:number,codigo_usuario:number){
        this.codigo_evento = codigo_evento;
        this.codigo_usuario = codigo_usuario;
    }
    setCodEvento(codigo_evento:number){
        this.codigo_evento = codigo_evento;
    }
    setCodUsuario(codigo_usuario:number){
        this.codigo_usuario = codigo_usuario;
    }
    getCodEvento(){
       return this.codigo_evento; 
    }
    getCodUsuario(){
        return this.codigo_usuario;
    }
}