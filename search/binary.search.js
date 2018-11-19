const { equals } = require('../helper');

function binarySearch(arr, find) {
    const size = arr.length;

    if (size < 2) return arr[0] === find;

    let left = 0;
    let right = size-1;
    let currIndex = Math.floor((right+left)/2);

    while (arr[currIndex] !== find && right > left) {

        if (find > arr[currIndex]) {
            left = currIndex + 1;
        } else {
            right = currIndex - 1;
        }

        currIndex = Math.floor((right+left)/2);
    }

    return (arr[currIndex] !== find) ? false : currIndex
}

binarySearch([0,1,2,3,4,5,6,7,8,9], 4);

equals(binarySearch([0,1,2,3,4,5,6,7,8,9], 4), 4);
equals(binarySearch([0,2,4,6,8,10,12,14,16,18], 8), 4);
equals(binarySearch([0,1,2,3,5,6,7,8,9], 4), false);
