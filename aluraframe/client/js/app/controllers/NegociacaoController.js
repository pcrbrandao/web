class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
    
        let dataString = $('#data').value;
        
        this._inputData = new Date(dataString.split('-'));
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
    }
    
    adiciona(event) {
        event.preventDefault();

        let data = DateHelper.textoParaData(this._inputData.value);

        this._negociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}