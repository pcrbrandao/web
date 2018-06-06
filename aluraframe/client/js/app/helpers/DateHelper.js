let DateHelper = {};

// texto no formato 'YYYY-mm-dd'
DateHelper.textoParaData = function(texto) {

    if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
        throw new Error('Deve estar no formato aaaa-mm-dd');
    }

    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
}

// saida no formato 'dd/mm/YYYY'
DateHelper.dataParaTexto = function(data) {

    return `${data.getDate()}/${(data.getMonth() + 1)}/${data.getFullYear()}`;
}

module.exports = DateHelper;