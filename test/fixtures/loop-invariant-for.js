'use strict';

function initialize() {
    let dbs = [], roles = [], perms = ['r', 'w', 'x', 'i'];
    let i;
    for (i = 0; i < 150; ++i) {
        dbs.push('db' + i);
    }
    for (i = 0; i < 20; ++i) {
        roles.push('role' + i);
    }

    return {dbs, roles, perms};
}

function doSomething(dbs, roles, perms) {
    let t, r, p, out = [];

    initialize();

    // the loop on dbs is useless
    for (t = 0; t < dbs.length; ++t) {
        for (r = 0; r < roles.length; ++r) {
            for (p = 0; p < perms.length; ++p) {
                // roles[r] should trigger a performance warning
                out.push({role: roles[r], perm: perms[p]});
            }
        }
    }
    return out;
}

module.exports = doSomething;