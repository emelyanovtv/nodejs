'use strict';

const { assertArrays } = require('../../helper');

function productArrItemsWithDivision(arr) {
    if (arr.length <= 1) return arr;

    const comp = arr.reduce((acc, item) => {
        if (item > 0) acc *= item;

        return acc;
    }, 1);

    return arr.map((item) => {
        return comp / item;
    });
}

assertArrays(productArrItemsWithDivision([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assertArrays(productArrItemsWithDivision([3, 2, 1]), [2, 3, 6]);

function productArrItems(arr) {
    if (arr.length <= 1) return arr;
    const arrLength = arr.length - 1;

    let curr = 1;

    const res = []

    for (let i = 0; i <= arrLength; i++) {
        res[i] = curr;
        curr *= arr[i];
    }

    curr = 1;

    for (let i = arrLength; i >= 0; i--) {
        res[i] = res[i] * curr;
        curr *= arr[i];
    }

    return res;
}

assertArrays(productArrItems([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assertArrays(productArrItems([3, 2, 1]), [2, 3, 6]);
assertArrays(productArrItems([1, 0, 1]), [0, 1, 0]);
