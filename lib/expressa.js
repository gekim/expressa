'use strict';

const Esprima = require('esprima');

class Expressa {
    parse(program) {
        return Esprima.parse(program);
    }
}

module.exports = Expressa;