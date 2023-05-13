/**
 * Verifica se duas palavras são anagramas uma da outra.
 *
 * @param {string} palavra1 - A primeira palavra a ser comparada.
 * @param {string} palavra2 - A segunda palavra a ser comparada.
 * @returns {boolean} Retorna true se as palavras forem anagramas uma da outra, ou false caso contrário.
 */
function verificarAnagrama(palavra1, palavra2) {
  let palavra1SemEspaco = palavra1.replace(/\s/g, '')
  let palavra2SemEspaco = palavra2.replace(/\s/g, '')

  let palavra1Minuscula = palavra1SemEspaco.toLowerCase()
  let palavra2Minuscula = palavra2SemEspaco.toLowerCase()

  if (palavra1Minuscula.length !== palavra2Minuscula.length) {
    return false
  }

  let contador1 = {}
  let contador2 = {}

  for (let letra of palavra1Minuscula) {
    if(contador1[letra]) {
      contador1[letra]++
    } else {
      contador1[letra] = 1
    }
  }

  for (let letra of palavra2Minuscula) {
    if (contador2[letra]) {
      contador2[letra]++
    } else {
      contador2[letra] = 1
    }
  }

  for (letra in contador1) {
    if (contador1[letra] !== contador2[letra]) {
      return false
    }
  }

  return true
}


console.log(verificarAnagrama("amor", "roma"))
console.log(verificarAnagrama("anagrama", "nagarama"))
console.log(verificarAnagrama("casa", "saco"))
console.log(verificarAnagrama("eleven plus two", "twelve plus one"))
console.log(verificarAnagrama("hello", "hola"))
