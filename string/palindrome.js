'use strict';

const { equals } = require('../helper');

function isPalindrome(str) {
    const size = str.length - 1;

    if (size <= 1) return true;

    str = str.toLowerCase();

    const middle = Math.floor(size/2);

    let left = 0;
    let rigth = size;

    while (left <= middle) {
        if (isChar(str[left])) {
            left++;
            continue
        }

        if (isChar(str[rigth])) {
            rigth--;
            continue
        }

        if (str[left] !== str[rigth]) return false;
        
        left++;
        rigth--;
    }

    return true;
}

function isChar(char) {
    return char.toLowerCase() === char.toUpperCase();
}

equals(isPalindrome('A man a plan a canal Panama'), true);
equals(isPalindrome('abcda'), false);
equals(isPalindrome('abcdcba'), true);
equals(isPalindrome('tre ert'), true);

