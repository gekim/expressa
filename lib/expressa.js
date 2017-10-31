'use strict';

const Esprima = require('esprima');

class Expressa {
    constructor(program) {
        this.program = program;
        this.parsedProgram = null;
        this.loops = null;
    }

    _getLoopStatements() {
        if (!this.parsedProgram) {
            this.parsedProgram = Esprima.parse(this.program);
        }
        this.loops = this._findLoop(this.parsedProgram.body)
            .reduce(function (a, b) {
                return a.concat(b);
            }, []);
        return this.loops;
    }

    categorizeLoops() {
        if (!this.loops) {
            this._getLoopStatements();
        }

        // TODO: find out what to do here.
        // This method isn't properly named.
        // We want the list of variables used in a loop but not used in the body
        let filtered = [];
        this.loops.forEach(loop => {
            // let vars = this._getUpdatedVariables(loop);
            filtered.push(loop);
            // if (this._varsAreUsedInBody(vars, loop)) {
            //
            // }
            // else {
            //
            // }
        });
        return filtered;
    }

    /**
     *
     * @param loop
     * loop.body
     * loop.init
     * loop.update
     * loop.test
     * @returns {Array}
     * @private
     */
    _getUpdatedVariables(/*loop*/) {
        let variables = [];

        return variables;
    }

    _varsAreUsedInBody(/*body, variables*/) {

    }

    _findLoop(nodes = []) {
        let results = [];
        if (Array.isArray(nodes)) {
            nodes.forEach(node => {
                results = results.concat(this._findLoop(node));
            });
        }
        else {
            switch (nodes.type) {
                case 'ForStatement': // body, init, test, update
                case 'WhileStatement':
                    results.push(nodes);
                    break;
                default:
                    if (nodes.body) {
                        results = results.concat(this._findLoop(nodes.body));
                    }
            }
        }
        return results;
    }
}

// {"type":"AssignmentExpression","operator":"=","left":{"type":"Identifier","name":"t"},"right":{"type":"Literal","value":0,"raw":"0"}}

module.exports = Expressa;