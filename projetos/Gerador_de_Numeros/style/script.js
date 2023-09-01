// Obtém uma referência ao elemento do botão com o ID 'generate'
const button = document.getElementById('generate');

// Adiciona um ouvinte de evento de clique ao botão
button.addEventListener('click', function() {
    // Obtém os valores dos campos de entrada 'min' e 'max' e os converte para números inteiros
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    // Gera um número aleatório entre 'min' e 'max', arredondando para baixo
    let result = Math.floor(Math.random() * (max - min + 1)) + min;

    // Verifica se o resultado gerado não é um número válido (NaN)
    if (isNaN(result)) {
        result = 'valor Inválido';
    }

    // Atualiza o conteúdo do elemento de <span> dentro do elemento com ID 'result' com o valor gerado
    document.querySelector('#result>span').textContent = result;
});
