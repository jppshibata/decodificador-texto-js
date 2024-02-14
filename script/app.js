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

function reiniciarTexto() {
    campo = document.getElementById('resultado__paragrafo');
    campo.value = '';
}

function criptografarTexto() {
    substituirImg();
    reiniciarTexto();
    texto = copiarTexto().toLowerCase();
    tamanhoTexto = copiarTamanho(texto);
    textoNovo = '';
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
    exibirTextoNaTelaResultado(textoNovo);
};

function descriptografarTexto() {
    substituirImg();
    reiniciarTexto();
    texto = copiarTexto().toLowerCase();
    textoNovo = texto;
    if (texto.indexOf('ai') !== -1) {
        textoNovo = textoNovo.replaceAll('ai', 'a');
    }
    if (texto.indexOf('enter') !== -1) {
        textoNovo = textoNovo.replaceAll('enter', 'e');
    }
    if (texto.indexOf('imes') !== -1) {
        textoNovo = textoNovo.replaceAll('imes', 'i');
    }
    if (texto.indexOf('ober') !== -1) {
        textoNovo = textoNovo.replaceAll('ober', 'o');
    }
    if (texto.indexOf('ufat') !== -1) {
        textoNovo = textoNovo.replaceAll('ufat', 'u');
    }
    exibirTextoNaTelaResultado(textoNovo);
};

function exibirTextoNaTelaResultado(texto) {
    let campo = document.getElementById('resultado__paragrafo');
    campo.innerHTML = texto;
}

let copiarResultadoBotao = document.getElementById('copiar__resultado');

copiarResultadoBotao.addEventListener('click', () => {
    let textoCopia = document.getElementById('resultado__paragrafo').innerText;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(textoCopia).then(() => {
            alert('Texto copiado com sucesso');
        })
    } else {
        console.log('Navegador não é compatível');
    }

})