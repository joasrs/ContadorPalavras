const txtResultadoPalavras = document.querySelector("#txtResultadoPalavras");
const txtResultadoLetras = document.querySelector("#txtResultadoLetras");
const qtdLetrasPalavra = document.querySelector("#qtdLetrasPalavra");
const chkConsiderarEspaco = document.querySelector("#chkConsiderarEspaco");
const textInput = document.querySelector("#text-input")
const log = document.querySelector("#log")

textInput.addEventListener('input', () => contar(textInput));
qtdLetrasPalavra.addEventListener('input', () => contar(textInput));
chkConsiderarEspaco.addEventListener('input', () => contar(textInput));

const contar = (e) => {
    let contadorPalavras = 0;
    let contadorLetras = 0;
    let contadorTemp = 0;
    e.value.split('').forEach(l => {
        contadorLetras += chkConsiderarEspaco.checked ? 1 : (l === ' ' ? 0 : 1)

        if(l !== ' '){
            contadorTemp++;
        }
        else{
            contadorPalavras += contadorTemp >= parseInt(qtdLetrasPalavra.value) ? 1 : 0;
            contadorTemp = 0;
        }
    });

    contadorPalavras += contadorTemp >= parseInt(qtdLetrasPalavra.value) ? 1 : 0;

    log.value = `> Qtd. palavras encontradas: ${contadorPalavras}\n> Qtd. letras encontradas: ${contadorLetras}`;
}