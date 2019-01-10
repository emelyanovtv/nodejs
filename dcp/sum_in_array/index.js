'use strict';

const { equals } = require('./../../helper');

function isSumInArr(arr, k) {
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        if (hash[val]) return true;

        hash[k-val] = true;
    }

    return false;
}

equals(isSumInArr([10, 15, 3, 7], 17), true);
equals(isSumInArr([10, 15, 3, 7], 14), false);
equals(isSumInArr([10, 15, 3, 7], 18), true);
