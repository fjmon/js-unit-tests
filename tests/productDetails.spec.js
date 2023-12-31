const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois 
  objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails()).toEqual('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails()).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const itens = productDetails()
    expect(typeof itens[0]).toEqual('object');
    expect(typeof itens[1]).toEqual('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('firstProduct', 'secondProduct')).toEqual([
      { name: 'firstProduct', details: { productId: 'firstProduct123' } },
      { name: 'secondProduct', details: { productId: 'secondProduct123' } }
    ]);
    expect(productDetails('secondProduct', 'firstProduct')).toEqual([
      { name: 'secondProduct', details: { productId: 'secondProduct123' } },
      { name: 'firstProduct', details: { productId: 'firstProduct123' } },
    ]);

    // Teste se os dois productIds terminam com 123.
    const item1 = productDetails()[0].details.productId
    const item2 = productDetails()[1].details.productId
    expect(item1.endsWith('123')).toBe(true);
    expect(item2.endsWith('123')).toBe(true);

  });
})