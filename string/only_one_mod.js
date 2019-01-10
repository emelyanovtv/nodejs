'use strict';

const { equals } = require('../helper');

/**
 * Существуют три вида модифицирующих операций со строками: вставка символа, удаление символа и замена символа.
 * Напишите функцию, которая проверяет, находятся ли две строки на расстоянии одной модификации (или нуля модификаций)
 */

function isOneSymbolMod(first, second) {
    let larger;
    let smaller;

    if (first.length < second.length) {
        larger = second;
        smaller = first;
    } else {
        larger = first;
        smaller = second;
    }

    if (larger.length - smaller.length > 1) return false;

    let isModified = false;
    let k = 0;

    for (let i = 0; i <= larger.length - 1; i++) {
        if (larger[i] !== smaller[k]) {
            if (!isModified) {
                isModified = true;
            } else {
                return false;
            }
        } else {
            k++;
        }
    }

    return true;
}

equals(isOneSymbolMod('pale', 'plesds'), false);
equals(isOneSymbolMod('pale', 'ple'), true);
equals(isOneSymbolMod('pales', 'pale'), true);
equals(isOneSymbolMod('pales', 'pale'), true);
equals(isOneSymbolMod('pale', 'bake'), false);
