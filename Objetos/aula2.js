const pessoa = {
    nome: 'Semaias de Oliveira Lima',
    idade: 23,
    
    
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }

};


pessoa.nome = 'João';
pessoa.idade = 20;

pessoa.descrever();