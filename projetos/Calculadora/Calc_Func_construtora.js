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
