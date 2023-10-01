/* 
    1 - Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médiode combustível por Kilômetro rodado.
    Crie um método que dado a quantidade de quilometros e o preço do combustível nos dê o valor
    gasto em reais para realizar este percurso.
*/

class Carro {

    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }

}

const gol = new Carro('Volkswagen', 'Branco', 1/10);
console.log(gol.calcularGastoDePercurso(70, 5));
