'use strict';

const { equals } = require('../helper');

/**
 *
 * @link https://www.hackerrank.com/challenges/encryption/problem
 */
function encryption(s) {
    if (s.length === 0) return s;
    
    const retStr = [];

    s = s.split(' ').join('');

    const matrixLength = Math.sqrt(s.length);
    const columns = Math.ceil(matrixLength);

    let cnt = 0;
    
    while (s.length > cnt) {
        if (!hash[cnt%columns]) hash[cnt%columns] = '';
        
        hash[cnt%columns] += s[cnt];
        cnt++;
    }

    return hash.join(' ');
}

equals(encryption('feed the dog'), 'fto ehg ee dd');
equals(encryption('have a nice day'), 'hae and via ecy');
