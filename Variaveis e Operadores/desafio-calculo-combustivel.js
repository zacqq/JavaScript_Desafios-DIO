/* 

Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 3 variáveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoCombustivel = 3.5;
const kmPorLitros = 11;
let distanciaEmKM = 228;
const medioGastoCombustivel = precoCombustivel / kmPorLitros;
const valorTotalGasto = medioGastoCombustivel * distanciaEmKM;

console.log (`O valor total gasto em combustivel para essa viagem será de: R$: ${valorTotalGasto.toFixed(2)}`);




