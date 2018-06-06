let assert = require('assert');
let dateHelper = require('../app/helpers/DateHelper.js');

describe('DateHelper test', function() {

    it('textoParaData deve ser 12/11/2018', function() {
        let date = new Date(2018, 10, 12);
        let dataEntrada = '2018-11-12';
        let dataFromText = dateHelper.textoParaData(dataEntrada);
        let dataExpected = '12/11/2018';

        assert.equal(dataExpected, dateHelper.dataParaTexto(dataFromText));
    });

});