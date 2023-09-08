/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1- Preço do Combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem; 

*/

const precoCombustivel = 5.50;
const gastoCombustivelKm = 10;
const distanciaKm = 200;

const litrosConsumidos = distanciaKm / gastoCombustivelKm;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));