/**
 * Remove os caracteres não numéricos de uma string de CPF.
 *
 * @param {string} cpf - A string de CPF a ser processada.
 * @returns {number[]} - Um array contendo apenas os dígitos numéricos do CPF.
 */
function removerCaracteresNaoNumericos(cpf) {
  cpf = cpf.replace(/\D/g, '')
  const cpfArray = cpf.split('').map(Number);
  return cpfArray
}

/**
 * Calcula o primeiro dígito verificador de um CPF.
 *
 * @param {number[]} cpfArray - O array de dígitos numéricos do CPF.
 * @returns {number} - O primeiro dígito verificador do CPF.
 */
function calcularPrimeiroDigitoVerificador(cpfArray) {
  const digitos = cpfArray.slice(0, 9)
  const pesos = [10, 9, 8, 7, 6, 5, 4, 3, 2]

  const soma = digitos.reduce((acumulador, digito, indice) => {
    return acumulador + digito * pesos[indice]
  }, 0)

  let resto = soma % 11
  const primeiroDigitoVerificador = (resto < 2) ? 0 : (11 - resto)
  return primeiroDigitoVerificador
}

/**
 * Calcula o segundo dígito verificador de um CPF.
 *
 * @param {number[]} cpfArray - O array de dígitos numéricos do CPF.
 * @returns {number} - O segundo dígito verificador do CPF.
 */
function calcularSegundoDigitoVerificador(cpfArray) {
  const digitos = cpfArray.slice(0, 10)
  const pesos = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

  const soma = digitos.reduce((acumulador, digito, indice) => {
    return acumulador + digito * pesos[indice]
  }, 0)

  let resto = soma % 11

  const segundoDigitoVerificador = (resto < 2) ? 0 : (11 - resto)

  return segundoDigitoVerificador
}

/**
 * Valida um CPF.
 *
 * @param {string} cpf - O CPF a ser validado.
 * @returns {boolean} - Retorna true se o CPF for válido e false caso contrário.
 */
function validarCPF(cpf) {
  const cpfArray = removerCaracteresNaoNumericos(cpf)

  if (cpfArray.length !== 11) {
    return false
  }

  const cpfString = cpfArray.join('')

  if (/^(\d)\1+$/.test(cpfString)) {
    return false
  }

  const primeiroDigitoVerificador = calcularPrimeiroDigitoVerificador(cpfArray)
  if (primeiroDigitoVerificador !== cpfArray[9]) {
    return false
  }

  const segundoDigitoVerificador = calcularSegundoDigitoVerificador(cpfArray)

  if (segundoDigitoVerificador !== cpfArray[10]) {
    return false
  }

  return true
}

console.log(validarCPF("529.982.247-25")) 
console.log(validarCPF("111.111.111-11"))
console.log(validarCPF("987.654.321-00"))
console.log(validarCPF("123.456.789-01"))
console.log(validarCPF("123@456@789-01"))
console.log(validarCPF("123.456-78"))
console.log(validarCPF("123.456.789.012-34"))
console.log(validarCPF("ABC.123.XYZ-00"))
console.log(validarCPF("111.222.333-96"))