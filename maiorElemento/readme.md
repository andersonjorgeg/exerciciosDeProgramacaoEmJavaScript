# Exercício Maior Elemento

**Nome do arquivo semântico:** maiorElemento.js

**Descrição:** Escreva uma função chamada `maiorElemento` que recebe uma lista de números como entrada e retorna o maior elemento da lista.

**Abstração da solução:**

1. Definir a função `maiorElemento` que recebe uma lista de números como parâmetro.
2. Inicializar uma variável `maior` com o valor do primeiro elemento da lista.
3. Percorrer os elementos da lista a partir do segundo elemento.
4. Comparar cada elemento com o valor armazenado na variável `maior`.
5. Se o elemento atual for maior que o valor armazenado em `maior`, atualizar o valor de `maior`.
6. Após percorrer todos os elementos, retornar o valor de `maior`.

**Exemplo de entrada e saída:**

Entrada: `[1, 2, 3, 4, 5]` <br>
Saída: 5

Entrada: `[10, 20, 30]` <br>
Saída: 30

Entrada: `[-1, 0, 1]` <br>
Saída: 1

Entrada: `[]` <br>
Saída: A lista está vazia
