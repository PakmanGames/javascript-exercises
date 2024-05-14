const repeatString = function(string, num) {
    catString = '';
    if (num < 0) {
        return "ERROR";
    }
    for (let i = num; i >= 1; i--) {
        catString += string;
    }
    return catString;
};

// Do not edit below this line
module.exports = repeatString;
