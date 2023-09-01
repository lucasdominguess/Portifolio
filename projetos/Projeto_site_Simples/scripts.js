//Funcao Dark_Ligth 

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

//Função escrevendo letras Modo Antigo
document.addEventListener("DOMContentLoaded", function() { //funcionou
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
      function escrevendoLetra2() {
        const titulo2 = document.querySelector('.ola');
        ativaLetra(titulo2);
    }
  
  escrevendoLetra();
  setInterval
  escrevendoLetra2();

});

// //Funcao Escrevendo Letras | Modo Promise |async |await 
// document.addEventListener("DOMContentLoaded", function() {
//   function ativaLetra(elemento) {
//       const arrTexto = elemento.innerHTML.split('');
//       elemento.innerHTML = '';
//       return new Promise(resolve => {
//           arrTexto.forEach((letra, i) => {
//               setTimeout(() => {
//                   elemento.innerHTML += letra;
//                   if (i === arrTexto.length - 1) {
//                       resolve();
//                   }
//               }, 75 * i);
//           });
//       });
//   }

//   async function escrevendoLetra() {
//       const titulo = document.querySelector('.ola');
//       await ativaLetra(titulo);
//   }

//   async function escrevendoLetra2() { // 'segundo texto'
//       const titulo2 = document.querySelector('.digitando');
//       await ativaLetra(titulo2);
//   }

//   async function escreverTextos() {
//       await escrevendoLetra();
//       escrevendoLetra2();
//   }

//   escreverTextos();
// });
