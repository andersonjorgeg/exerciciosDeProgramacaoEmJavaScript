const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Função para obter entrada do usuário.
 *
 * @param {string} mensagem - A mensagem exibida para o usuário.
 * @param {Function} callback - A função de retorno que lida com a resposta do usuário.
 */
function obterEntrada(mensagem, callback) {
  rl.question(mensagem, (resposta) => {
    callback(resposta);
  });
}

/**
 * Função para fechar a interface de entrada do usuário.
 */
function fecharInterface() {
  rl.close();
}

module.exports = { obterEntrada, fecharInterface };
