/**
 * Função contaPalavras
 * 
 * Recebe uma frase como entrada e retorna o número de palavras na frase.
 * 
 * @param {string} frase - A frase a ser analisada.
 * @returns {number} O número de palavras na frase.
 */

function contaPalavras(frase) {

  if (frase === '' || frase === ' ') {
    return 0
  }

  const fraseSemEspaco = frase.trim()
  const palavras = fraseSemEspaco.split(' ')
  const resultado = palavras.length
  return resultado
}

//testes
const frase1 = "Olá, mundo!";
console.log(contaPalavras(frase1))

const frase2 = "Esta é uma frase com várias palavras para contar.";
console.log(contaPalavras(frase2))

const frase3 = "   Palavras com espaços   ";
console.log(contaPalavras(frase3))

const frase4 = "";
console.log(contaPalavras(frase4))

const frase5 = " ";
console.log(contaPalavras(frase5))

