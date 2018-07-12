export class Usuario{

    private codigo:number;
    private email:string;
    private password:number;
    private nome:string;
    private curso:string;
    private ocupacao:string
    private organizacao:string
    private data_nascimento:Date

    constructor(codigo:number,email:string,password:number,nome:string,curso:string,ocupacao:string,organizacao:string,data_nascimento:Date) {
        this.codigo = codigo;
        this.email = email;
        this.password = password;
        this.nome = nome;
        this.curso = curso;
        this.ocupacao = ocupacao;
        this.organizacao = organizacao;
        this.data_nascimento = data_nascimento;
    }

    setCodigo(codigo:number){
        this.codigo = codigo;
    }
    setEmail(email:string){
        this.email = email;
    }
    setPassword(password:number){
        this.password = password;
    }
    setNome(nome:string){
        this.nome = nome;
    }
    setCurso(curso:string){
        this.curso = curso;
    }
    setOcupacao(ocupacao:string){
        this.ocupacao = ocupacao;
    }
    setOrganizacao(organizacao:string){
        this.organizacao = organizacao;
    }
    setDataNascimento(data_nascimento:Date){
        this.data_nascimento = data_nascimento;
    }

    getCodigo(){
        return this.codigo;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
    getNome(){
        return this.nome;
    }
    getCurso(){
        return this.curso;
    }
    getOcupacao(){
        return this.ocupacao;
    }
    getOrganizacao(){
        return this.organizacao;
    }
    getDataNascimento(){
        return this.data_nascimento;
    }    
}