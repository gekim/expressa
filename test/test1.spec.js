'use strict';

const Expressa = require('../lib/expressa');
const expect = require('chai').expect;
const fs = require('fs');
const path = require('path');

function loadFile(filePath) {
    let buffer = fs.readFileSync(path.join(__dirname, filePath));
    return buffer.toString('utf8');
}

describe('Expressa', function () {
    let expressa, LOOP_INVARIANT;

    before(function () {
        LOOP_INVARIANT = loadFile('./fixtures/loop-invariant-for.js');
    });

    beforeEach(function () {
        expressa = new Expressa();
    });

    describe('Initialization', function () {

    });

    describe('Parsing', function () {
        it('should parse a program', function () {
            expect(function () {
                expressa.parse(LOOP_INVARIANT);
            }).to.not.throw(Error);
        });
    });
});