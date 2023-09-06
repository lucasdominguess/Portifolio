
function imc(){ 
    document.getElementById('bnt-enviar').addEventListener('click' , (e) => {
        e.preventDefault(); 

        const alt = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);

        let resultado = peso / (alt*alt);
        let frase = 'Insira os dados e calcule o IMC';
        document.querySelector('#resultado>span').textContent=resultado.toFixed(2);
        
        if (resultado >= 40) {
            frase = 'Obesidade Grau III'
        };
        if (resultado >=35 && resultado <=39.9) { 
            frase = 'Obesidade Grau II'
        };

        if (resultado >=30 && resultado <=34.9) { 
            frase = 'Obesidade Grau I'
           
        };
        
        if (resultado >=25 && resultado <=29.9 ) { 
            frase = 'Sobrepeso'
           
        };
        if  (resultado >= 18.6 && resultado <=24.9) {
            frase = 'Peso Ideal' 
            
            
        };
        if (resultado <18.5 ) {
            frase = 'Abaixo do peso' 
            
        };
        // if (resultado === isNaN(resultado)) {
        //     resultado = 'Valores Invalidos'
        //     frase = 'valores Inválidos';
        
        document.querySelector('#frase').textContent=frase ;    
        });
        document.addEventListener('reset', () => { //Limpando resultado apos click limpar 
            document.querySelector('#resultado>span').innerHTML = 0 ;
                    document.querySelector('#frase').textContent= '';
      
        }); 


}   
imc() ; 






















