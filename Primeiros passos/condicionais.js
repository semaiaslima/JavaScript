const numero = 3;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numero === 0) {
    console.log('O número é inválido');
} else if (numeroPar) {
    console.log('Executado');
} else {
    console.log('Não executado');
}
