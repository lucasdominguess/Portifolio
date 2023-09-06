
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
