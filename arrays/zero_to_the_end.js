'use strict';

const { assertArrays } = require('../helper');

/**
 * move all 0 to end of array
 *
 * complexity: time O(n), memory O(1)
 */

function zerosToTheEnd(arr) {
    const size = arr.length ? arr.length - 1 : 0;

    if (size <= 1) return arr;

    let k = 0;

    for (let i = 0; i+k <= size; i++) {
        if (arr[i+k] != 0) {
            arr[i] = arr[i+k];
        } else {
            k++; i--;
        }
    }

    // if we have zeros at our array
    while (k > 0) {
        --k;
        arr[size-k] = 0;
    }
    
    return arr;
}

assertArrays(zerosToTheEnd([1,2,3,1,0,6,4,0,0,3,0]), [1,2,3,1,6,4,3,0,0,0,0]);
assertArrays(zerosToTheEnd([0,0,0,1]), [1,0,0,0]);
assertArrays(zerosToTheEnd([1,2,3,2,3,0,0]), [1,2,3,2,3,0,0]);
