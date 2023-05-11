/**
 * Função Inverter String
 *
 * @param {string} string - A string que será invertida.
 * @returns {string} A string invertida.
 */

function inverterString(string) {
  let stringInvertida = ""

  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i]
  }
  return stringInvertida

}

// testes
console.log(inverterString("Hello, World!"))
console.log(inverterString("OpenAI is amazing"))
console.log(inverterString("12345"))
console.log(inverterString(""))
console.log(inverterString("a"))
