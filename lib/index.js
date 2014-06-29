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

module.exports = utool;