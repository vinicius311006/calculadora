$(document).ready(function() {
  let tela = $('#display'); // Tela da calculadora displey
  let entradaAtual = '';   // Entrada atual do usuário
  let operador = '';       // Operador matemático
  let primeiroOperando = ''; // Primeiro operando

  $('.btn').click(function() {
      const valor = $(this).data('value'); // Obtém o valor do botão clicado

      if (valor === 'C') {
          entradaAtual = '';
          operador = '';
          primeiroOperando = '';
          tela.val(''); // Limpa a tela
      } else if (valor === '=') {
          if (primeiroOperando && operador && entradaAtual) {
              // Calcula o resultado usando eval
              const resultado = eval(`${primeiroOperando} ${operador} ${entradaAtual}`);
              tela.val(resultado); // Exibe o resultado
              entradaAtual = resultado;
              operador = '';
              primeiroOperando = '';
          }
      } else if (['+', '-', '*', '/'].includes(valor)) {
          if (primeiroOperando && operador && entradaAtual) {
              const resultado = eval(`${primeiroOperando} ${operador} ${entradaAtual}`);
              tela.val(resultado);
              entradaAtual = resultado;
          }
          primeiroOperando = entradaAtual;
          operador = valor;
          entradaAtual = '';
      } else {
          entradaAtual += valor;
          tela.val(entradaAtual); // Atualiza a tela com a entrada atual
      }
  });
});