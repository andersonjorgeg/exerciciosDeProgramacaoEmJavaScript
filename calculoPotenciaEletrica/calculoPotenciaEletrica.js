/**
 * Calcula a potência elétrica com base na tensão e corrente fornecidas.
 *
 * @param {number} tensao - A tensão em volts (V).
 * @param {number} corrente - A corrente em amperes (A).
 * @returns {number} A potência elétrica em watts (W).
 */
function calculoPotenciaEletrica(tensao, corrente) {
  if (typeof tensao !== 'number' || typeof corrente !== 'number' || isNaN(tensao) || isNaN(corrente)) {
    console.log('Os valores de tensão e corrente devem ser números válidos.')
  }
  const resultado = tensao * corrente;
  return resultado;
}

document.getElementById("calcular").addEventListener("click", function () {

  const tensaoInput = document.getElementById("tensao");
  const correnteInput = document.getElementById("corrente");

  const tensao = parseFloat(tensaoInput.value);
  const corrente = parseFloat(correnteInput.value);

  const potencia = calculoPotenciaEletrica(tensao, corrente);

  if (!isNaN(potencia)) {
    document.getElementById("resultado").textContent = `A potência elétrica é ${potencia.toFixed(2)} watts.`;

    tensaoInput.value = "";
    correnteInput.value = "";
  }

});

