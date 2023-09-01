
//Função escrevendo letras titulo 2
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
  
  escrevendoLetra();
});
//Função escrevendo letras titulo 1
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
          const titulo = document.querySelector('.ola');
          ativaLetra(titulo);
        }
        escrevendoLetra();
      
    });



//funçao ativa menu hamburguer 

function menuMobol(){ 
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu=document.querySelector('header .navegação-primaria')

  ativaMenu.addEventListener('click',()=>{
  ativaMenu.classList.toggle('fa-x');
  navMenu.classList.toggle('ativado');
});

}
menuMobol();

//função sobremim (expericencia/education) (Nao esta funcionando)
function sobreMim() {
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul lu');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul lu');

    divExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')


    function slideShow(index) { 
      divExperiencia.forEach((div)=> { 
          div.classList.remove('ativo');

      });
      liExperiencia.forEach((botao)=>{
        botao.classList.remove('ativo');
      })
      divExperiencia[index].classList.add('ativo');
      liExperiencia[index].classList.add('ativo');

    }

    function slideShow2(index) { 
      divEducation.forEach((div)=> { 
          div.classList.remove('ativo');

      });
      liEducation.forEach((botao)=>{
        botao.classList.remove('ativo');
      })
      divEducation[index].classList.add('ativo');
      liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event,index)=> { 
      event.addEventListener('click' , ()=>{ 
          slideShow(index)
      });
    });


    liEducation.forEach((event,index)=> { 
      event.addEventListener('click' , ()=>{ 
          slideShow2(index)
      });
    });
}
sobreMim(); 

//função Selecionar projeto / models /armazenamento (Nao esta funcionando)
const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.projects_models ul li');
const buttonALL = document.querySelector('.projects_models .all');

function removeClick(index) { 
  buttonGeral.forEach((item) =>{ 
    item.classList.remove('ativo');
  });
  buttonGeral[index].classList.add('ativo')
}
buttonGeral.forEach((item,index)=> { 
  item.addEventListener('click',()=> { 
    removeClick(index) ;
  })
})

function showLista(lista,buttom ="all") {
    lista.forEach((item)=>{
      item.classList.remove('ativo');
    })
    if(buttom == 'design'){
      lista[0].classList.add('ativo');
      lista[1].classList.add('ativo');
    }
    if(buttom == 'graphic'){
      lista[2].classList.add('ativo');
      lista[3].classList.add('ativo');
    }
    if(buttom == 'website'){
      lista[4].classList.add('ativo');
      lista[5].classList.add('ativo');
      lista[6].classList.add('ativo');
      lista[7].classList.add('ativo');
    }
    if(buttom == 'all'){
      lista[0].classList.add('ativo');
      lista[1].classList.add('ativo');
      lista[2].classList.add('ativo');
      lista[3].classList.add('ativo');
      lista[4].classList.add('ativo');
      lista[5].classList.add('ativo');
      lista[6].classList.add('ativo');
      lista[7].classList.add('ativo');
    }
}


buttonGeral.forEach((item)=>{ 
  item.addEventListener('click',(e)=>{ 
    let currentButton = e.targer; 
    if(currentButton.classList.contains('all')){
      showLista(listatALL);
    }
    if(currentButton.classList.contains('design')){
      showLista(listatALL,"design");
    }
    if(currentButton.classList.contains('graphic')){
      showLista(listatALL,"graphic");
    }
    if(currentButton.classList.contains('website')){
      showLista(listatALL,"website");
    }
    if(currentButton.classList.contains('all')){
      showLista(listatALL);
    }


  })
}) 
