# Exercício Verificar Anagrama

## Nome do arquivo semântico
verificarAnagrama.js

## Descrição
Escreva uma função chamada `verificarAnagrama` que recebe duas palavras como entrada e verifica se elas são anagramas. Duas palavras são consideradas anagramas se possuírem as mesmas letras, independentemente da ordem em que aparecem.

## Abstração da solução
1. Definir a função `verificarAnagrama` que recebe duas palavras como parâmetro.
2. Remover todos os espaços em branco das palavras.
3. Converter as palavras para letras minúsculas.
4. Verificar se as palavras têm o mesmo comprimento. Se não, retornar `false`.
5. Criar dois objetos vazios, `contador1` e `contador2`, para armazenar a contagem de ocorrências de cada letra nas palavras.
6. Percorrer cada letra das palavras e atualizar os contadores:
   - Se a letra já existir no `contador1`, incrementar seu valor.
   - Se a letra não existir no `contador1`, adicionar a letra com o valor 1.
   - Repetir o mesmo processo para o `contador2`.
7. Verificar se os contadores são iguais. Se sim, as palavras são anagramas e retornar `true`. Caso contrário, retornar `false`.

## Exemplo de entrada e saída
<pre>
Entrada: "amor", "roma"
Saída: `true`

Entrada: "batata", "tabata"
Saída: `true`

Entrada: "anagrama", "nagarama"
Saída: `true`

Entrada: "casa", "saco"
Saída: `false`

Entrada: "eleven plus two", "twelve plus one"
Saída: `true`

Entrada: "hello", "hola"
Saída: `false`
</pre>

## Exemplos de uso na vida real
- Verificar se duas palavras ou frases são anagramas, sendo útil em jogos de palavras como Scrabble.
- Análise de textos para identificar palavras ou frases que são anagramas, o que pode revelar padrões interessantes.
- Verificar a validade de anagramas em charadas e desafios linguísticos.
- Implementar funcionalidades em aplicativos de jogos de palavras, como sugestão de anagramas para palavras dadas.
- Realizar análises de texto em linguística computacional para estudar a frequência e distribuição de anagramas em diferentes idiomas.
