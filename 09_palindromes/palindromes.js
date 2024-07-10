const palindromes = function (str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz1234567890";
    const clean = str
        .toLowerCase()
        .split("")
        .filter(char => alpha.includes(char))
        .join("");

    const rev = clean
        .split("")
        .reverse()
        .join("");

    return rev === clean
};

// Do not edit below this line
module.exports = palindromes;
