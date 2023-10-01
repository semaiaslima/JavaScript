class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;

    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


const sema = new Pessoa('Semaias Lima', 24);
const renan = new Pessoa('Renan Jesus', 32);

console.log(sema);