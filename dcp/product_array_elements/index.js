'use strict';

const { assertArrays } = require('../../helper');

function productArrItemsWithDivision(arr) {
    if (arr.length <= 1) return arr;

    const comp = arr.reduce((acc, item) => {
        if (item > 0) acc*=item;

        return acc;
    }, 1);

    return arr.map((item) => {
        return comp/item ;
    });
}

assertArrays(productArrItemsWithDivision([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assertArrays(productArrItemsWithDivision([3, 2, 1]), [2, 3, 6]);

function productArrItems(arr) {
    if (arr.length <= 1) return arr;

    const left = makeNewArr(arr);
    const right = makeNewArr(arr.reverse());

    return arr.map((item, index) => {
        return left[index] * right[right.length - 1 - index];
    });
}

function makeNewArr(arr) {
    const result = [1];

    for (let i = 0; i < arr.length - 1; i++) {
        const prev = result[result.length - 1];
        result.push(prev * arr[i]);
    }

    return result;
}

assertArrays(productArrItems([1, 2, 3, 4, 5]), [120, 60, 40, 30, 24]);
assertArrays(productArrItems([3, 2, 1]), [2, 3, 6]);
assertArrays(productArrItems([1, 0, 1]), [0, 1, 0]);
