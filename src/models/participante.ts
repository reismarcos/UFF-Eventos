export class Participante{

    codigo_evento:number;
    codigo_usuario:number;
    data_evento:Date;
    constructor(codigo_evento:number,
        codigo_usuario:number,
        data_evento:Date){
            this.codigo_evento = codigo_evento;
            this.codigo_usuario = codigo_usuario;
            this.data_evento = data_evento;
    }

    setCodEvento(codigo_evento:number){
        this.codigo_evento = codigo_evento;
    }
    setCodUsuario(codigo_usuario:number){
        this.codigo_usuario = codigo_usuario;
    }
    setData(data_evento:Date){
        this.data_evento = data_evento;
    }
    getCodEvento(){
        return this.codigo_evento;
    }
    getCodUsuario(){
        return this.codigo_usuario;
    }
    getData(){
        return this.data_evento;
    }
}