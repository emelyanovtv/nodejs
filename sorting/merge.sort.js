const { assertArrays } = require('../helper');

// Split the array into halves and merge them recursively
function mergeSort(arr) {
    if (arr.length === 1) {
        // return once we hit an array with a single item
        return arr
    }

    const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
    const left = arr.slice(0, middle) // items on the left side
    const right = arr.slice(middle) // items on the right side

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
    let result = []
    let indexLeft = 0
    let indexRight = 0

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

assertArrays(mergeSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
assertArrays(mergeSort([3, 2, 1]), [1, 2, 3]);
assertArrays(mergeSort([23, 6, 9, 4, 2, 3, 5, 8]), [ 2, 3, 4, 5, 6, 8, 9, 23 ]);
