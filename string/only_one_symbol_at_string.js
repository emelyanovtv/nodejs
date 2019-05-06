const assert = require('assert');

function sortString(str) {
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}

const isStringHasNotRepeatedSymbols = (str) => {
    const strSorted = sortString(str);

    let i = 0;

    while(i < strSorted.length - 1) {
        if (strSorted[i] === strSorted[i+1]) {
            return false;
            break;
        }

        i++;
    }

    return true;
}

assert.equal(isStringHasNotRepeatedSymbols('baaaaacsbg'), false);;
assert.equal(isStringHasNotRepeatedSymbols('abdfrty,,'), true);;
