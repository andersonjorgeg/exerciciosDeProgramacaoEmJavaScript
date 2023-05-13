# Exercício Validar CPF

## Nome do arquivo semântico
validarCPF.js

## Descrição
Escreva uma função chamada `validarCPF` que recebe um CPF (Cadastro de Pessoa Física) como entrada e verifica se ele é válido. Um CPF válido deve seguir as seguintes regras:

- Deve ter exatamente 11 dígitos numéricos.
- Não pode ser uma sequência de dígitos repetidos, como "11111111111" ou "22222222222".
- Deve passar na verificação do dígito verificador, que é calculado de acordo com um algoritmo específico.

## Abstração da solução

1. Definir a função `validarCPF` que recebe um CPF como parâmetro.
2. Remover todos os caracteres não numéricos do CPF, deixando apenas os dígitos.
3. Verificar se o CPF possui exatamente 11 dígitos numéricos. Se não, retornar `false`.
4. Verificar se o CPF é uma sequência de dígitos repetidos. Se sim, retornar `false`.
5. Calcular o primeiro dígito verificador:
   - Obter os primeiros 9 dígitos do CPF.
   - Multiplicar cada dígito pela sequência decrescente de pesos: 10, 9, 8, 7, 6, 5, 4, 3, 2.
   - Somar os resultados das multiplicações.
   - Dividir a soma por 11 e obter o resto.
   - Se o resto for 0 ou 1, o dígito verificador deve ser 0. Caso contrário, o dígito verificador deve ser 11 menos o resto.
6. Verificar se o dígito verificador calculado é igual ao décimo dígito do CPF. Se não, retornar `false`.
7. Calcular o segundo dígito verificador de forma semelhante ao passo 5, mas considerando os primeiros 10 dígitos do CPF e a sequência de pesos modificada: 11, 10, 9, 8, 7, 6, 5, 4, 3, 2.
8. Verificar se o segundo dígito verificador calculado é igual ao décimo primeiro dígito do CPF. Se não, retornar `false`.
9. Se todas as verificações forem bem-sucedidas, retornar `true`.

## Exemplo de entrada e saída

Entrada: "529.982.247-25"
Saída: `true`

Entrada: "111.111.111-11"
Saída: `false`

Entrada: "987.654.321-00"
Saída: `true`

Entrada: "123.456.789-01"
Saída: `false`

Entrada: "123@456@789-01"
Saída: `false`

Entrada: "123.456-78"
Saída: `false`

Entrada: "123.456.789.012-34"
Saída: `false`

Entrada: "ABC.123.XYZ-00"
Saída: `false`

Entrada: "111.222.333-96"
Saída: `true`

## Exemplos de uso na vida real

- Validação de CPF em cadastros de usuários em sistemas de autenticação.
- Verificação de CPF em processos de contratação, para garantir a veracidade dos documentos apresentados.
- Implementação de funcionalidades em sistemas financeiros que exigem CPF válido, como abertura de contas bancárias.
- Validação de CPF em formulários online para garantir que os dados fornecidos sejam corretos.
- Implementação de políticas de segurança que exigem a validação do CPF para acesso a determinados recursos ou informações sensíveis.
