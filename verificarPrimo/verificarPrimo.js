/**
 * Verifica se um número inteiro positivo é primo.
 * 
 * @param {number} numeroInteiroPositivo - O número inteiro positivo a ser verificado.
 * @returns {string} Retorna "verdadeiro" se o número for primo e "falso" caso contrário.
 */

function verificarPrimo(numeroInteiroPositivo) {
  if(numeroInteiroPositivo === 1) {
    return "falso"
  }

  const limite = Math.floor(Math.sqrt(numeroInteiroPositivo))
  for (let i = 2; i <= limite; i++) {
    if(numeroInteiroPositivo % i === 0) {
      return "falso"
    }
  }

  return "verdadeiro"

}

console.log(verificarPrimo(5))
console.log(verificarPrimo(10))
console.log(verificarPrimo(17))
console.log(verificarPrimo(20))
