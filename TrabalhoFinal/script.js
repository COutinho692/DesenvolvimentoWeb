function processarEnvio(event) {
  // Não deixa recarregar a página ao enviar o fomrs
  event.preventDefault();

  // Captura dos valores 
  const nomeUsuario = document.getElementById('nome').value;
  const emailUsuario = document.getElementById('email').value;
  const caixaFeedback = document.getElementById('mensagemFeedback');

  // Altera o conteúdo de texto da div ocultada
  caixaFeedback.innerText = `Obrigado pela mensagem, ${nomeUsuario}! Caso necessário 
  entrarei em contato através do seu email, ${emailUsuario}.`;

  // Altera a classe CSS para exibir a mensagem na tela de forma estilizada
  caixaFeedback.className = 'feedback-sucesso';

  // Limpa o formulário após o envio com sucesso
  document.getElementById('formContato').reset();
}

// Vincula o evento de submit do formulário à nossa função criada acima
const formulario = document.getElementById('formContato');
if (formulario) {
  formulario.addEventListener('submit', processarEnvio);
}