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
    let LOOP_INVARIANT;

    before(function () {
        LOOP_INVARIANT = loadFile('./fixtures/loop-invariant-for.js');
    });

    describe('Initialization', function () {

    });

    describe('Parsing', function () {
        it('should get all the loops of a program', function () {
            const expressa = new Expressa(LOOP_INVARIANT);
            const loops = expressa._getLoopStatements();
            expect(loops.length).to.equal(3);
            const filteredLoops = expressa.categorizeLoops();
            expect(filteredLoops.length).to.equal(0);
        });
        it('should parse and filter directly', function () {
            const expressa = new Expressa(LOOP_INVARIANT);
            const filteredLoops = expressa.categorizeLoops();
            expect(filteredLoops.length).to.equal(0);
        });
    });
});