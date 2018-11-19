const assert = require('assert');

const assertArrays = function(actual, expected) {
    actual.forEach((item, i) => {
        try {
            assert(expected[i] === item);
        } catch (e) {
            throw new Error(`expected ${expected[i]} but ${item} found`);
        }
    });
};

const equals = function(actual, expected) {
    try {
        assert(actual === expected);
    } catch (e) {
        throw new Error(`expected ${expected} but actual is ${actual}`);
    }
};

module.exports = {
    assertArrays,
    equals
};


