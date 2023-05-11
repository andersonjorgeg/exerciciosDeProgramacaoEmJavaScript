/**
 * Função para encontrar o maior elemento em uma lista de números.
 * @param {Array} array - A lista de números.
 * @returns {number|string} - O maior elemento da lista ou uma mensagem indicando que a lista está vazia.
 */

function maiorElemento(array) {

  if (array.length === 0) {
    return "A lista está vazia"
  }

  let maior = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    } 
  }
  
  return maior
}

// testes
const numeros1 = [1, 2, 3, 4, 5];
console.log(maiorElemento(numeros1)); 

const numeros2 = [10, 20, 30];
console.log(maiorElemento(numeros2)); 

const numeros3 = [-1, 0, 1];
console.log(maiorElemento(numeros3)); 

const numeros4 = [];
console.log(maiorElemento(numeros4)); 

