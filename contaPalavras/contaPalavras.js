/* 
Descrição: Escreva uma função chamada contaPalavras que recebe uma frase como entrada e retorna o número de palavras na frase.
Exemplo de entrada e saída:

Entrada: "Eu gosto de programar"
Saída: 4
*/

function contaPalavras(string) {

  if (string === '' || string === ' ') {
    return 0
  }

  const fraseSemEspaco = string.trim()
  const palavras = fraseSemEspaco.split(' ')
  const resultado = palavras.length
  return resultado
}

//testes
const frase1 = "Olá, mundo!";
console.log(contaPalavras(frase1)); // Saída esperada: 2

const frase2 = "Esta é uma frase com várias palavras para contar.";
console.log(contaPalavras(frase2)); // Saída esperada: 9

const frase3 = "   Palavras com espaços   ";
console.log(contaPalavras(frase3)); // Saída esperada: 3

const frase4 = "";
console.log(contaPalavras(frase4)); // Saída esperada: 0

const frase5 = " ";
console.log(contaPalavras(frase5)); // Saída esperada: 0

