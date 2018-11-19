const { assertArrays }  = require('../helper');

function selectionSort(arr) {
    const size = arr.length;

    if (size < 2) return arr;

    for (let i = 0; i < size; i++){
        let min = i;

        for (let j = i+1; j < size; j++){
            if (arr[min] > arr[j]){
                min = j;
            }
        }

        if(min !== i) {
            const tmp = arr[i];

            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }

    return arr;
}

assertArrays(selectionSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArrays(selectionSort([3, 2, 1]), [1, 2, 3]);
assertArrays(selectionSort([23, 6, 9, 4, 2, 3, 5, 8]), [ 2, 3, 4, 5, 6, 8, 9, 23 ]);




