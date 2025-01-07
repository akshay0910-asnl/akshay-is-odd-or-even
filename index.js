/**
 * Adds two numbers.
 * @param {number} n - The number.
 * @returns {string} Whether the number is even or odd.
 */
const isOddOrEven = (n) => {
  if (n % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

module.exports = isOddOrEven;