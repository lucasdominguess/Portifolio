document.addEventListener("DOMContentLoaded", function() {
    function ativaLetra(elemento) {
        const arrTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        return new Promise(resolve => {
            arrTexto.forEach((letra, i) => {
                setTimeout(() => {
                    elemento.innerHTML += letra;
                    if (i === arrTexto.length - 1) {
                        resolve();
                    }
                }, 75 * i);
            });
        });
    }

    async function escrevendoLetra() {
        const titulo = document.querySelector('.digitando');
        await ativaLetra(titulo);
    }

    async function escrevendoLetra2() { // 'segundo texto'
        const titulo2 = document.querySelector('.ola');
        await ativaLetra(titulo2);
    }

    async function escreverTextos() {
        await escrevendoLetra();
        escrevendoLetra2();
    }

    escreverTextos();
});
