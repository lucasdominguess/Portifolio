document.getElementById('calcular').addEventListener('click',(event) => { 
    event.preventDefault() ; //Impede o envio do formulario (resultado permanece na tela )

    const valor = document.getElementById('valor_acordo').value ;    
    // const valor2 = document.getElementById('valor2').value ;    
    
    const total = valor-valor*30/100 ; 

    document.getElementById('resultado').innerHTML= ("R$ "+ total.toFixed(2).replace('.',',')) ;

    document.getElementById('limpar').addEventListener('click' , ()=> 
    document.getElementById('resultado').innerHTML = 0 )
});