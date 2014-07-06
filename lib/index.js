var utool = {};

/**
 * Represents a function for strings capitalization
 * @function
 * @param {string} source - String for capitalization
 */

utool.capitalize = function (source) {
    return source.replace(/^./, function (match) {
        return match.toUpperCase();
    });
};

/**
 * Represents a function for strings uncapitalization
 * @function
 * @param {string} source - String for uncapitalization
 */

utool.uncapitalize = function (source) {
    return source.replace(/^./, function (match) {
        return match.toLowerCase();
    });
};


/**
 * Represents a function for strings upper-case
 * @function
 * @param {string} source - String for upper-case
 */

utool.uppercase = function (source) {
    return source.toUpperCase();
};

/**
 * Represents a function for strings lower-case
 * @function
 * @param {string} source - String for lower-case
 */

utool.lowercase = function (source) {
    return source.toLowerCase();
};

/**
 * Represents a function for strings/arrays reverse
 * @function
 * @param source - String/Array for reverse
 */

utool.reverse = function (source) {
    if (typeof source === "string") {
        return  source.split("").reverse().join("");
    } else {
        return source.reverse();
    }
};

/**
 * Represents a function for deletion multiple whitespaces from string
 * @function
 * @param {string} source - String for deletion multiple spaces
 */

utool.removeMultipleSpaces = function (source) {
    return source.replace(/\s+/g, " ");
};

/**
 * Get first element in array
 * @function
 * @param {Array} source - Array
 */

utool.first = function (source) {
    return source.slice(0,1).join("");
};

/**
 * Get last element in array
 * @function
 * @param {Array} source - Array
 */

utool.last = function (source) {
    return source.slice(-1).join("");
};

/**
 * Get rest of array
 * @function
 * @param {Array} source - Array
 * @param {number} from - Number of elements for omit
 */

utool.rest = function (source, from) {
    from = from === undefined ? 1 : from;
    return source.slice(from);
};

module.exports = utool;