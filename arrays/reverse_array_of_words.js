const { assertArrays } = require('../helper');

/**
 * @param {String} char
 * @returns {Boolean}
 */
function isLetter(char) {
    return char.toLowerCase() !== char.toUpperCase();
}

/**
 * @param {String[]} arr
 * @returns {String[]}
 */
const reverseWords = (arr) => {
    if (!arr || !arr.length) return arr;

    const length = arr.length - 1;

    // end of the word
    let end = length;
    // start of the word
    let start = 0;

    for (let i = length; i >= 0; i--) {
        if(isLetter(arr[i])) continue;

        start = i + 1;

        const mid = Math.floor((end - start) / 2);

        let k = 0;

        while (k <= mid) {
            const tmp = arr[start + k];

            arr[start + k] = arr[end - k];
            arr[end - k] = tmp;

            k++;
        }

        end = i - 1;
    }

    return arr;
};


const actual1 = reverseWords(['I', ' ', 'l', 'o', 'v', 'e', ' ', 'T', 'a', 'x', 'i', 'f', 'y']);
const actual2 = reverseWords(['I', ' ', 'c', 'a', 'n', ' ', 'd', 'o', '', 'i', 't']);

assertArrays(actual1, ['I', ' ', 'e','v','o','l',' ','y','f','i','x','a','T']);
assertArrays(actual2, [ 'I', ' ', 'n', 'a', 'c', ' ', 'o', 'd', '', 't', 'i' ]);

