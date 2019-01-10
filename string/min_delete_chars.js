'use strict';

const { equals } = require('../helper');

/**
 * Шашанку нравятся строки, в которых последовательные символы отличаются. Например, ему нравится строка , но не нравится строка . Задана строка, состоящая только из символов  и . Шашанк хочет сделать из нее строку, которая ему понравится. Для этого он может удалять из нее символы.
 * Ваша задача - найти минимальное количество необходимых удалений.
 */

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let deleteChars = 0;

    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        let count = 1;

        while (s[i + count] === val) {
            deleteChars++;
            count++;
        }

        i += count - 1;
    }

    return deleteChars;
}

equals(alternatingCharacters('AAABBB'), 4);
equals(alternatingCharacters('ABABABABAB'), 0);
equals(alternatingCharacters('BBBBB'), 4);
equals(alternatingCharacters('AAABBBAABB'), 6);
