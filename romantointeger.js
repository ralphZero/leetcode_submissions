// https://leetcode.com/problems/roman-to-integer/

const romanToInt = function(numerals) {
    let sum = 0;
    numerals = numerals.split('');
    for(let i = 0; i < numerals.length; i++) {
        const romanNumeral = numerals[i];
        const nextRomanNumeral = numerals[i+1];
        if(romanNumeral === 'I' && nextRomanNumeral === 'V') {
            //return 4 && increment i
            sum+=4;
            i++;
        } else if(romanNumeral === 'I' && nextRomanNumeral === 'X') {
            //return 9 && increment i
            sum+=9;
            i++;
        } else if(romanNumeral === 'X' && nextRomanNumeral === 'L') {
            //return 40 && increment i
            sum+=40;
            i++;
        } else if(romanNumeral === 'X' && nextRomanNumeral === 'C') {
            //return 90 && increment i
            sum+=90;
            i++;
        } else if(romanNumeral === 'C' && nextRomanNumeral === 'D') {
            //return 400 && increment i
            sum+=400;
            i++;
        } else if(romanNumeral === 'C' && nextRomanNumeral === 'M') {
            //return 900 && increment i
            sum+=900;
            i++;
        } else {
            //return the correct number
            switch(romanNumeral) {
                case 'V':
                    sum+=5;
                    break;
                case 'X':
                    sum+=10;
                    break;
                case 'L':
                    sum+=50;
                    break;
                case 'C':
                    sum+=100;
                    break;
                case 'D':
                    sum+=500;
                    break;
                case 'M':
                    sum+=1000;
                    break;
                default:
                    sum++;
                    break;
            }
        }
    }

    return sum;
};
let head = 'LVIII';
console.log(romanToInt(head));
