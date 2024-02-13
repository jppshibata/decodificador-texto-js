let texto = '';
let textoNovo = '';
let tamanhoTexto = 0;

function substituirImg() {
    document.getElementsByClassName('conteudo__resultado__img')[0].style.display = 'none';
};

function copiarTexto() {
    return texto = document.getElementById('conteudo__textocripto').value;
};

function copiarTamanho(texto) {
    tamanhoTexto = texto.length;
    return tamanhoTexto;
}

function criptografarTexto() {
    substituirImg();
    texto = copiarTexto().toLowerCase();
    tamanhoTexto = copiarTamanho(texto);
    for (i = 0; i < tamanhoTexto; i++) {
        if (texto[i] === 'a') {
            textoNovo += 'ai';
        } else if (texto[i] === 'e') {
            textoNovo += 'enter';
        } else if (texto[i] === 'i') {
            textoNovo += 'imes';
        } else if (texto[i] === 'o') {
            textoNovo += 'ober';
        } else if (texto[i] === 'u') {
            textoNovo += 'ufat';
        } else {
            textoNovo += texto[i];
        }
    }
    console.log(textoNovo);
    exibirTextoNaTelaResultado(textoNovo);
};

function descriptografarTexto() {
    substituirImg();
    texto = copiarTexto();
    tamanhoTexto = copiarTamanho(texto);
    for (i = 0; i < tamanhoTexto; i++) {
    }
};

function exibirTextoNaTelaResultado(texto) {
    let campo = document.getElementById('resultado__paragrafo');
    console.log(campo);
    campo.innerHTML = texto;
}

function copiarTextoResultado() {
    let textoCopia = document.getElementsById('resultado__paragrafo').value;
    return textoCopia;
};