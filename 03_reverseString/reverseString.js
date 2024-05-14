const reverseString = function(string) {
    const reverseArr = [];
    let reverseString = '';
    for (let i = 0; i < string.length; i++) {
        reverseArr[i] = string.charAt(i);
    }
    for (let i = reverseArr.length - 1; i >= 0; i--) {
        reverseString += reverseArr[i];
    }
    return reverseString;
};

reverseString("hello");

// Do not edit below this line
module.exports = reverseString;
