//Função escrevendo letras

document.addEventListener("DOMContentLoaded", function() {
    function ativaLetra(elemento) {
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 75 * i);
      });
    }
  

    
    function escrevendoLetra() {
      const titulo = document.querySelector('.digitando');
      ativaLetra(titulo);
    }
      function escrevendoLetra2() { 'segundo texto'
        const titulo2 = document.querySelector('.ola');
        ativaLetra(titulo2);
    }
  
  escrevendoLetra();

  escrevendoLetra2();
});