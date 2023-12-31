/*
  A função average recebe um array de tamanho variável e retorna a média dos valores 
  recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined 
  deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 
  vira 1.
  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/
const average = (array) => {
  let sum = 0;
// if (typeof array !== 'number') {
//   return undefined;
// }
for (let i = 0; i < array.length || i === 0; i += 1) {
if (array.length === i || typeof array[i] !== 'number') {
  return undefined;
}
sum += array[i];
}
return Math.round(sum / array.length);
};

// console.log(sum);

module.exports = average;

// como calcular a média de um array de tamanho variável? - 
// soma dos itens do array (n) dividido pela quantidade de itens do array (array.length) math.around
// para a soma dos itens devo fazer um for capturando cada elemento e somando entre si