function somaArray(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }
  return soma
}

//testes
console.log(somaArray([1, 2, 3, 4, 5]))
console.log(somaArray([10, 20, 30]))
console.log(somaArray([-1, 0, 1]))
console.log(somaArray([]))
