import { Local } from './local';

export class Evento {

    private codigo: number;
    private nome: string;
    private data: Date;
    private faixa_etaria: number;
    private codigo_curso: number;
    private local: Local;
    private horario: string;
    private duracao: number;
    private tipo: string;
    private programacao: string;

    constructor(codigo: number,
        nome: string,
        data: Date,
        faixa_etaria: number,
        codigo_curso: number,
        local: Local,
        horario: string,
        duracao: number,
        tipo: string,
        programacao: string) {
        
        this.codigo = codigo;
        this.nome = nome;
        this.data = data;
        this.faixa_etaria = faixa_etaria;
        this.codigo_curso = codigo_curso;
        this.local = local;
        this.horario = horario;
        this.duracao = duracao;
        this.tipo = tipo;
        this.programacao = programacao;

    }

    setCodigo(codigo: number){
        this.codigo = codigo;
    }
    setNome(nome: string){
        this.nome = nome;
    }
    setData(data: Date){
        this.data = data;
    }
    setFaixaEtaria(faixa_etaria: number){
        this.faixa_etaria = faixa_etaria;
    }
    setCodCurso(codigo_curso: number){
        this.codigo_curso = codigo_curso;

    }
    setLocal(local: Local){
        this.local = local;
    }
    setHorario(horario: string){
        this.horario = horario;
    }
    setDuracao(duracao: number){
        this.duracao = duracao;
    }
    setTipo(tipo: string){
        this.tipo = tipo;
    }
    setProgramacao(programacao: string){
        this.programacao = programacao;
    }
    getCodigo(){
        return this.codigo;
    }
    getNome(){
        return this.nome;
    }
    getData(){
        return this.data;
    }
    getFaixaEtaria(){
        return this.faixa_etaria;
    }
    getCodCurso(){
        return this.codigo_curso;
    }
    getLocal(){
        return this.local;
    }
    getHorario(){
        return this.horario;
    }
    getDuracao(){
        return this.duracao;
    }
    getTipo(){
        return this.tipo;
    }
    getProgramacao(){
        return this.programacao;    
    }
}