//Função Abrir/Fechar Menu 
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

//link para whatapp icone flutuante
window.onload = function(){
  (function(d, script) {
  script = d.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://w.app/widget-v1/u4QBva.js';
  d.getElementsByTagName('head')[0].appendChild(script);
  }(document));
  };

//Funcao Dark_Light 

const mode = document.getElementById('mode_icon');

mode.addEventListener('click', ()=> {
    const form = document.getElementById('bodyid');
    if (mode.classList.contains('fa-moon')) { 
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark'); //adc modo dark 
        return;
    }
        
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');
        form.classList.remove('dark'); 
    
});
//funcao dark _light barra lateral 

const mode2 = document.getElementById('mode_icon2');

mode2.addEventListener('click', ()=> {
    const form = document.getElementById('bodyid');
    if (mode2.classList.contains('fa-moon')) { 
        mode2.classList.remove('fa-moon');
        mode2.classList.add('fa-sun');
        form.classList.add('dark'); //adc modo dark 
        return;
    }
        
        mode2.classList.remove('fa-sun');
        mode2.classList.add('fa-moon');
        form.classList.remove('dark'); 
    
});