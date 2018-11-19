const { assertArrays } = require('../helper');

function quickSort(arr) {
    const size = arr.length;

    if (size < 2) return arr;

    const index = Math.floor(Math.random()*size);
    const pivot = arr[index];

    let left = [];
    let right = [];

    for (let val of arr) {
        if (val < pivot) {
            left.push(val);
        } else if (val > pivot) {
            right.push(val);
        }
    }

    left = quickSort(left);
    right = quickSort(right);

    return left.concat([pivot]).concat(right);
}

assertArrays(quickSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArrays(quickSort([3, 2, 1]), [1, 2, 3]);
assertArrays(quickSort([23, 6, 9, 4, 2, 3, 5, 8]), [ 2, 3, 4, 5, 6, 8, 9, 23 ]);
