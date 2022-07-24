// https://leetcode.com/problems/roman-to-integer/

const romanToInt = function (numerals) {
    let sum = 0;
    numerals = numerals.split('');

    const romanNumber = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }

    for (let i = 0; i < numerals.length; i++) {

        const dis = numerals[i];
        const nxt = numerals[i + 1];

        if(nxt && romanNumber[dis] < romanNumber[nxt]) {
            sum = sum + (romanNumber[nxt] - romanNumber[dis])
            i++
        } else {
           sum += romanNumber[dis];
        }
    }

    return sum;
};
let head = 'MCMXCIV';
console.log(romanToInt(head));
