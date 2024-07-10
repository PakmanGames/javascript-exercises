const findTheOldest = function(arr) {
    return arr.reduce((acc, curr) => {
        if (! "yearOfDeath" in curr) {
            curr.yearOfDeath = (new Date()).getFullYear();
        } else if (! "yearOfDeath" in acc) {
            acc.yearOfDeath = (new Date()).getFullYear();
        }
        return curr.yearOfDeath - curr.yearOfBirth > acc.yearOfDeath - acc.yearOfBirth ? curr : acc
    });
};

// Do not edit below this line
module.exports = findTheOldest;
