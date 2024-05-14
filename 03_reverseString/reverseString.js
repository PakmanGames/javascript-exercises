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

/*
This method also works
.split("") splits the string by each individual character turning it into an array
.reverse() is an array method that reverses an array
.join("") does the opposite of .split("") it joins all the characters into a string
*/
// const reverseString = function (string) {
//     return string.split("").reverse().join("");
// };

// Do not edit below this line
module.exports = reverseString;
