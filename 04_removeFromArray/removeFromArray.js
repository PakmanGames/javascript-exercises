const removeFromArray = function(arr, ...args) {
    // Use .filter() method, if True keep element, if false dont' keep
    // inside .filter() is another function
    return arr.filter(
        // Arrow function that has parameter element (element of arr)
        // .includes() method checks if args contains element
        // if not it returns false but !false = true
        // Thus that true is returned to the .filter() method
        (element) => !args.includes(element)
    );
};

// Do not edit below this line
module.exports = removeFromArray;
