const { assertArrays } = require('../helper');

function bubbleSort(arr) {
    const size = arr.length;

    if (size < 2) return arr;

    for(let i = 0; i < size; i++) {
        for(let j=0; j < size-i; j++) {
            if (arr[j] > arr[j+1]) {
                const tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    return arr;
}

assertArrays(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArrays(bubbleSort([3, 2, 1]), [1, 2, 3]);
assertArrays(bubbleSort([23, 6, 9, 4, 2, 3, 5, 8]), [ 2, 3, 4, 5, 6, 8, 9, 23 ]);
