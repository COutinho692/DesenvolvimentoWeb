// Função obrigatória em JavaScript que captura o envio do formulário
function processarEnvio(event) {
  // Impede a página de recarregar ao submeter o formulário
  event.preventDefault();

  // Captura dos valores do DOM usando os IDs dos inputs
  const nomeUsuario = document.getElementById('nome').value;
  const caixaFeedback = document.getElementById('mensagemFeedback');

  // MANIPULAÇÃO DO DOM: Altera o conteúdo de texto da div ocultada
  caixaFeedback.innerText = `Obrigado pelo contato, ${nomeUsuario}! Sua mensagem foi enviada com sucesso.`;

  // MANIPULAÇÃO DO DOM: Altera a classe CSS para exibir a mensagem na tela de forma estilizada
  caixaFeedback.className = 'feedback-sucesso';

  // Limpa o formulário após o envio com sucesso
  document.getElementById('formContato').reset();
}

// Vincula o evento de submit do formulário à nossa função criada acima
const formulario = document.getElementById('formContato');
if (formulario) {
  formulario.addEventListener('submit', processarEnvio);
}