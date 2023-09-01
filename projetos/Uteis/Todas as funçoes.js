
//TODAS AS FUNÇOES 

//  FUNCAO CALCULADORA
function Calculadora() {    
    this.display = document.querySelector('.display');
  
    this.inicia = () => {
      this.cliqueBotoes();
      this.pressionaEnter();
    };
    //botao Enter no teclado //ativando qlq tecla
    this.pressionaEnter = () => { 
      document.addEventListener('keyup', event => {
        if (event.keyCode === 13) {
          this.realizaConta();
        }
      });
    };
  
    //função principal /capturando botoes digitados
    this.cliqueBotoes = () => {  //Função Responsavel por pegar o evento click
      document.addEventListener('click', event => {  // pegando evento click no documento | e=evento
        const el = event.target; //target = possição na pagina onde foi feito o click
  
        if (el.classList.contains('btn-num'))  //verificando se a var el contem o valor "btc-num"(valor do botao)
         this.addNumDisplay(el); //dps pega valor do Numero/item la no doc html mandando para func display
       
        if (el.classList.contains('btn-clear')) this.clear(); //simplificando em 1 linha
        if (el.classList.contains('btn-del')) this.del();
        if (el.classList.contains('btn-eq')) this.realizaConta(); //botao =
      });
    };
    //Func realizando o calculo da conta
    this.realizaConta = () => {
      try {
        const conta = eval(this.display.value);
  
        if(!conta) {
          alert('Conta inválida');
          return;
        }
  
        this.display.value = conta;
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    };
    //adcionando numero ao display
    this.addNumDisplay = el => {
      this.display.value += el.innerText;
      this.display.focus();
    };
  
    //Resposavel de limpar o display 
    this.clear = () => this.display.value = '';
  
    //Deletar apenas um: 
    this.del = () => this.display.value = this.display.value.slice(0, -1);
  }
  const calculadora = new Calculadora();
  calculadora.inicia();
  

//SCRIPT CALCULADORA JUROS COMPOSTOS 
document.getElementById('calcular').addEventListener('click',function() {
    const value = document.getElementById('value').value ; 
    const fee = (document.getElementById('fee').value)/100 ;
    const time = document.getElementById('time').value;

    const total = value * (1 +fee)**time; 

    document.getElementById('total').innerHTML = ("R$ "+ total.toFixed(2).replace('.',','));
    
});


//SCRIPT BOTAO CARD ANIMADO
var button = document.getElementById('read_button') ; 
button.addEventListener('click',function() { 
    var card = document.querySelector('.card');
    card.classList.toggle('active');

    if (card.classList.contains('active')) { 
        return button.textContent = 'Read less'; 
    } 
    button.textContent = 'Read more'; 
    
});


//SCRIPT MODO DARK/LIGHT 
    const mode = document.getElementById('mode_icon');
    mode.addEventListener('click', ()=> {
        const form = document.getElementById('login_form');
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


//SCRIPT GERA NUMERO ALEATORIO 
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

//SCRIPT CONTADOR (APERTE + OU - MOSTRE O NUMERO)
    Function(){ //SÓ PARA ESCONDER ESCOPO
    const value = document.getElementById('value')  //pegando id dos botoes 
    const plusButton = document.getElementById('plus')
    const minusButton = document.getElementById('minus')
    const resetButton = document.getElementById('reset')
    //função altera/atualiza o cont no doc html (aparece na tela) 
    const updateValue = () => {     
value.innerHTML = count;
     };
     //variavel :
    let count = 0; //var inicia 0 e vai mudar ao longo do cod
    let intervalId = 0; //var usada para intervalo do botao
    //Config Botoes 
    plusButton.addEventListener('mousedown',()=> {  //botao +
        intervalId=setInterval(() => {
            count+=1;
            updateValue()
        },100);
    });
    minusButton.addEventListener('mousedown',()=> { //botao -
        intervalId=setInterval(() => {
            count-=1; // altera o contador em -1
            updateValue()
        },100);
    });
    resetButton.addEventListener('click',()=> {
        count= 0;
        updateValue()
    });
    //parando contador apos soltar o click do mouse
    document.addEventListener('mouseup', () => clearInterval(intervalId));}

//SCRIPT RELOGIO DIGITAL
Function{    
    // Obtendo referências aos elementos HTML que exibirão as horas, minutos e segundos
    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');

    // Definindo um intervalo que será chamado a cada segundo para atualizar o relógio
    const relogio = setInterval(function time() { 
    // Obtendo a data e hora atual
    let dateToday = new Date();
    
    // Extraindo as horas, minutos e segundos da data atual
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    // Formatando os valores para terem sempre dois dígitos (0 à esquerda, se necessário)
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    // Atualizando o conteúdo dos elementos HTML com as horas, minutos e segundos atualizados
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
    }, 1000); // O intervalo é definido para 1000 milissegundos (1 segundo)
}

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
