# Exercício Verificar Palíndromo

## Nome do arquivo semântico
verificarPalindromo.js

## Descrição
Escreva uma função chamada `verificarPalindromo` que recebe uma string como entrada e verifica se ela é um palíndromo. Um palíndromo é uma palavra, frase, número ou qualquer outra sequência de caracteres que permanece a mesma quando lida de trás para frente, desconsiderando espaços em branco e diferenciação entre maiúsculas e minúsculas.

## Abstração da solução
1. Definir a função `verificarPalindromo` que recebe uma string como parâmetro.
2. Remover todos os caracteres não alfanuméricos da string.
3. Remover todos os espaços em branco da string.
4. Converter todos os caracteres da string para letras minúsculas.
5. Criar uma variável vazia para armazenar a string invertida.
6. Percorrer cada caractere da string de trás para frente.
   - Para cada caractere, adicionar o caractere à string invertida.
7. Comparar a string original com a string invertida.
   - Se as duas strings forem iguais, retornar `true`, indicando que é um palíndromo. Caso contrário, retornar `false`.

## Exemplo de entrada e saída
<pre>
Entrada: "Ana"
Saída: `true`

Entrada: "Amor, Roma"
Saída: `true`

Entrada: "Anotaram a data da maratona"
Saída: `true`

Entrada: "OpenAI is amazing"
Saída: `false`

Entrada: "12321"
Saída: `true`

Entrada: "Hello, World!"
Saída: `false`
</pre>

## Exemplos de uso na vida real
- Verificação de palíndromos em jogos de palavras e quebra-cabeças.
- Implementação de funcionalidades em sistemas de busca que levam em consideração palíndromos.
- Desenvolvimento de algoritmos de criptografia que utilizam palíndromos como parte do processo.
- Construção de programas e desafios matemáticos que envolvem a identificação de palíndromos.
- Aplicações em análise de texto para identificar e destacar palíndromos em trechos de texto.
