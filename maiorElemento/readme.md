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

**Exemplo de uso na vida real:**

A função `maiorElemento` pode ser útil em várias situações do mundo real. Aqui estão alguns exemplos:

1. Em uma aplicação de análise financeira, você pode usar essa função para encontrar o maior valor em uma lista de preços de ações ao longo de um período de tempo. Isso pode ajudar a identificar o preço mais alto alcançado por uma ação e auxiliar na tomada de decisões de investimento.

2. Em um sistema de gerenciamento de estoque, a função pode ser usada para determinar o produto mais vendido com base nas quantidades vendidas registradas em uma lista. Isso pode ser útil para identificar os itens mais populares e auxiliar no planejamento de reposição de estoque.

3. Em um aplicativo de classificação de filmes, a função pode ser aplicada para encontrar o filme com a maior avaliação em uma lista de avaliações de usuários. Isso pode ajudar a destacar os filmes mais bem avaliados e fornecer recomendações aos usuários.
