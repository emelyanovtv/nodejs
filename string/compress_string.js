'use strict';

const { equals } = require('../helper');

/**
 * Реализуйте метод для выполнения простейшего сжатия строк с использованием счетчика повторяющихся символов.
 * Например, строка aabcccccaaa превращается в a2b1c5a3. Если «сжатая» строка не становится короче исходной, то метод возвращает исходную строку.
 * Предполагается, что строка состоит только из букв верхнего и нижнего регистра (a—z).
 */
function stringCompression(str) {
    let retStr = '';

    for (let i = 0; i < str.length; i++) {
        const val = str[i];

        let count = 1;

        while (str[i + count] === val) {
            count++;
        }
        
        retStr += val + count;
        i += count - 1;
    }

    if (str.length <= retStr.length) return str;
    
    return retStr;
}

equals(stringCompression('aabcccccaaa'), 'a2b1c5a3');
