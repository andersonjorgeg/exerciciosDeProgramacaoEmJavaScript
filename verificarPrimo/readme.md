# Exercício Verificar Primo

**Nome do arquivo semântico:** verificarPrimo.js

**Descrição:** Escreva uma função chamada `verificarPrimo` que recebe um número inteiro positivo como entrada e retorna verdadeiro se o número for primo e falso caso contrário. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

**Abstração da solução:**

1. Definir a função `verificarPrimo` que recebe um número inteiro positivo como parâmetro.
2. Verificar se o número é igual a 1. Se for, retornar falso, pois 1 não é um número primo.
3. Percorrer os possíveis divisores do número a partir de 2 até a sua raiz quadrada (arredondada para baixo).
4. Para cada divisor, verificar se o número é divisível por ele. Se for, retornar falso, pois não é um número primo.
5. Se nenhum divisor for encontrado, retornar verdadeiro, pois o número é primo.

**Exemplo de entrada e saída:**
<pre>
Entrada: 5
Saída: verdadeiro

Entrada: 10
Saída: falso

Entrada: 17
Saída: verdadeiro

Entrada: 20
Saída: falso
</pre>

**Exemplo de uso na vida real:**

1. Verificação de números primos em algoritmos de criptografia.
2. Geração de números primos em aplicações de segurança.
3. Análise de padrões numéricos em teoria dos números.