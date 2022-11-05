/*

Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
    1 - Preço da gasolina;
    2 - Preço do etanol;
    3 - O tipo  de combustível que está no seu carro;
    4 - Gasto médio de combustível do carro por KM;
    5 - Distância em KM da viagem;

    Imprima no console o valor que será gasto para realizar esta viagem.

*/

const precoGasolina = 4.85;
const precoEtanol = 3.49;
const tipoCombustivel = 'etanol';
const kmPorLitros = 9;
let distanciaEmKM = 230;

const litrosGastosNaGasolina = precoGasolina / kmPorLitros;
const litrosGastosNoEtanol = precoEtanol / kmPorLitros;



if (tipoCombustivel === `gasolina`) {
    const totalNaGasolina = litrosGastosNaGasolina * distanciaEmKM;
    console.log(`Seu carro irá gastar R$:${totalNaGasolina.toFixed(2)} de combustível na gasolina`)
}
else if (tipoCombustivel === `etanol`) {
    const totalNoEtanol = litrosGastosNoEtanol * distanciaEmKM;
    console.log(`Seu carro irá gastar R$:${totalNoEtanol.toFixed(2)} de combustível no Etanol`)
} else {
    console.log(`Não consegui compreender o tipo do seu combustível, tente etanol ou gasolina`)
}