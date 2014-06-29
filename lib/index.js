var utool = {};

/**
 * Represents a function for strings capitalization
 * @function capitalize
 * @param {string} source - String for capitalization
 */

utool.capitalize = function (source) {
    return source.replace(/^./, function (match) {
        return match.toUpperCase();
    });
};

/**
 * Represents a function for strings uncapitalization
 * @function uncapitalize
 * @param {string} source - String for uncapitalization
 */

utool.uncapitalize = function (source) {
    return source.replace(/^./, function (match) {
        return match.toLowerCase();
    });
};

module.exports = utool;