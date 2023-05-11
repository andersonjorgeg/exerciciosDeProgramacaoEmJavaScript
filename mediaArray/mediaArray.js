/**
 * Calcula a média dos elementos de uma lista de números.
 * 
 * @param {Array} listaNumeros - Uma lista de números.
 * @returns {number} A média dos números da lista. Se a lista estiver vazia, retorna 0.0.
 */

function mediaArray(listaNumeros) {

  if (listaNumeros.length === 0) {
    return 0.0
  }

  let soma = 0

  for (let numero of listaNumeros) {
    soma += numero
  }
  
  let media = soma / listaNumeros.length

  return media
}

console.log(mediaArray([1, 2, 3, 4, 5]).toFixed(1))
console.log(mediaArray([10, 20, 30]).toFixed(1))
console.log(mediaArray([-1, 0, 1]).toFixed(1))
console.log(mediaArray([]).toFixed(1))
