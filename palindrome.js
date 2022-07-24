// https://leetcode.com/problems/palindrome-linked-list/

const isPalindrome = function(head) {
    let index = 0;
    let res = false;
    while(head.length - index - 1 > index) {
        let reversedIndex = head.length - index - 1;
        if(head[reversedIndex] === head[index]) {
            res = true;
            index++;
        } else {
            res = false;
            break;
        }
    }
    return res;
};
let head = [1, 2, 2, 1];
console.log(isPalindrome(head));