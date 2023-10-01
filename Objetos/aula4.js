class Pessoa {

    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


const sema = new Pessoa();
sema.nome = 'Semaias Lima';
sema.idade = 25;

const renan = new Pessoa();
renan.nome = 'Renan Jesus';
renan.idade = 32;

console.log(sema);
console.log(renan);

sema.descrever();
renan.descrever();