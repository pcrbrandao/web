class Negociacao {

    constructor(data, quantidade, valor) {
        this._data = new Date(data.getTime());
        this._quatidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume() {
        return this._quatidade * this._valor;
    }

    get data() {
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quatidade;
    }

    get valor() {
        return this._valor;
    }
}