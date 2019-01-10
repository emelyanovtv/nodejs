'use strict';

const { equals } = require('../helper');

/**
 * Alice has a binary string. She thinks a binary string is beautiful if and only if it doesn't contain the substring .
 * In one step, Alice can change a  to a  or vice versa. Count and print the minimum number of steps needed to make Alice see the string as beautiful.
 * For example, if Alice's string is  she can change any one element and have a beautiful string.
 *
 * Function Description
 * Complete the beautifulBinaryString function in the editor below. It should return an integer representing the minimum moves required.
 * beautifulBinaryString has the following parameter(s):
 * b: a string of binary digits
 * Input Format
 * The first line contains an integer , the length of binary string.
 * The second line contains a single binary string .
 */
function beautifulBinaryString(b) {
    const pattern = '010';
    let patternsCount = 0;
    let counter = 0;

    for (let i = 0; i < b.length; i++) {

        while (b[i+counter] === pattern[counter] && counter < 3) {
            counter++;
        }

        if (counter === 3) {
            patternsCount++;
            i += counter - 1;
        }
        
        counter = 0;
    }

    return patternsCount;
}

equals(beautifulBinaryString('0100101010'), 3);
equals(beautifulBinaryString('01100'), 0);
