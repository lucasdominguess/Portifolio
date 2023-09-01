function somaValores(){ 
    document.getElementById('enviar').addEventListener('click', (event) => { 
        event.preventDefault(); // Impede o envio do formulário
        //Pegando elementos da pag por id 
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        //processando valores
        const total = num1 + num2;
                                    //alterando valor resultado 
        document.getElementById('resultado').innerHTML = total;
    });
    document.addEventListener('reset', () => { //Limpando resultado apos click limpar 
        document.getElementById('resultado').innerHTML = 0 ;
    }); 
}
//chamando função
somaValores();