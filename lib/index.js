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
 * Represents a function for strings reverse
 * @function
 * @param {string} source - String for reverse
 */

utool.reverse = function (source) {
    return source.split('').reverse().join('');
};

module.exports = utool;