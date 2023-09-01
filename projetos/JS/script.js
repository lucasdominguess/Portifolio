function abrirmenu() {
    let BarraMenuAberto = document.getElementById('barra-menu')
    if(BarraMenuAberto.style.width == "0px"){
        BarraMenuAberto.style.width = "180px";

    }

    else{
        BarraMenuAberto.style.width = "0px";
    }
}

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
      const titulo = document.querySelector('.dev');
      ativaLetra(titulo);
    }
escrevendoLetra();
});