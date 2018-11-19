const { assertArrays } = require('../helper');

function insertionSort(arr) {
    const size = arr.length;

    if (size < 2) return arr;

    for(let i = 1; i < size; i++) {
        let j = i;

        while (j >= 1 && arr[j] < arr[j-1]) {
            const tmp = arr[j];

            arr[j] = arr[j-1];
            arr[j-1] = tmp;

            j--;
        }
    }

    return arr;
}

assertArrays(insertionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArrays(insertionSort([3, 2, 1]), [1, 2, 3]);
assertArrays(insertionSort([23, 6, 9, 4, 2, 3, 5, 8]), [ 2, 3, 4, 5, 6, 8, 9, 23 ]);
