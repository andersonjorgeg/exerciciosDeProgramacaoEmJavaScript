/**
 * Verifica se uma string é um palíndromo.
 * 
 * @param {string} string - A string a ser verificada.
 * @returns {boolean} Retorna true se a string for um palíndromo e false caso contrário.
 */
function verificarPalindromo(string){
  let stringSemEspacos = string.replace(/\s/g, '')
  let stringSemPontuacoes = stringSemEspacos.replace(/[^\w\s]/g, '')
  let stringMaiuscula = stringSemPontuacoes.toUpperCase()

  let stringInvertida = ""

  for (let i = stringMaiuscula.length - 1; i >= 0; i--) {
    stringInvertida += stringMaiuscula[i]
  }

  if (stringMaiuscula === stringInvertida) {
    return true
  } 

  return false

}

console.log(verificarPalindromo("Ana"))
console.log(verificarPalindromo("Amor, Roma"))
console.log(verificarPalindromo("Anotaram a data da maratona"))
console.log(verificarPalindromo("OpenAI is amazing"))
console.log(verificarPalindromo("12321"))
console.log(verificarPalindromo("Hello, World!"))
console.log(verificarPalindromo("Madam, I'm Adam"))
console.log(verificarPalindromo("A man, a plan, a canal, Panama!"))
console.log(verificarPalindromo("Was it a car or a cat I saw?"))
console.log(verificarPalindromo("No lemon, no melon"))
console.log(verificarPalindromo("Step on no pets"))

