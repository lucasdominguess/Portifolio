
//pegando id dos botoes 
const value = document.getElementById('value')
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
document.addEventListener('mouseup', () => clearInterval(intervalId));