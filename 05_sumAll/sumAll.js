const sumAll = function(a, b) {
    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else if (a > b) {
        a = a + b;
        b = a - b;
        a = a - b;
    }
    let sum = 0;
    for (let i = a; i < b + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
