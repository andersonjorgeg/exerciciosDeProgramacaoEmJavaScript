# Exercício ContaPalavras

**Nome do arquivo semântico:** contaPalavras

**Descrição:** Escreva uma função chamada contaPalavras que recebe uma frase como entrada e retorna o número de palavras na frase.

**Abstração da solução:**

1. Definir a função contaPalavras que recebe uma frase como parâmetro.
2. Verificar se a frase é vazia ou contém apenas espaços em branco. Se for o caso, retornar 0.
3. Remover os espaços em branco no início e no final da frase usando a função trim().
4. Dividir a frase em palavras com base nos espaços em branco usando a função split(' ').
5. Obter o número de palavras no array resultante usando a propriedade length.
6. Retornar o número de palavras.

**Exemplo de entrada e saída:**

Entrada: "Olá, mundo!" <br>
Saída: 2

Entrada: "Esta é uma frase com várias palavras para contar." <br>
Saída: 9

Entrada: "   Palavras com espaços   " <br>
Saída: 3

Entrada: "" <br>
Saída: 0

Entrada: " " <br>
Saída: 0
