/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @returns {string} Capitalized string
 * @example capitalize("hello") → "Hello"
 */
export function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - Input string
 * @returns {string} String with each word capitalized
 * @example capitalizeWords("hello world") → "Hello World"
 */
export function capitalizeWords(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str.split(' ').map(word => capitalize(word)).join(' ');
}

/**
 * Converts a string to a URL-friendly slug
 * @param {string} str - Input string
 * @returns {string} Slugified string
 * @example slugify("Hello World!") → "hello-world"
 */
export function slugify(str) {
  if (typeof str !== 'string' || str.length === 0) return str;
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

/**
 * Truncates a string to the specified length with an ellipsis
 * @param {string} str - Input string
 * @param {number} length - Maximum length before truncation
 * @returns {string} Truncated string
 * @example truncate("Hello World", 5) → "Hello..."
 */
export function truncate(str, length) {
  if (typeof str !== 'string' || str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Reverses a string
 * @param {string} str - Input string
 * @returns {string} Reversed string
 * @example reverseString("abc") → "cba"
 */
export function reverseString(str) {
  if (typeof str !== 'string') return str;
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is a palindrome
 * @param {string} str - Input string
 * @returns {boolean} True if the string is a palindrome
 * @example isPalindrome("madam") → true
 * @example isPalindrome("hello") → false
 */
export function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanStr === reverseString(cleanStr);
}

/**
 * Removes all spaces from a string
 * @param {string} str - Input string
 * @returns {string} String without spaces
 * @example removeSpaces("a b c") → "abc"
 */
export function removeSpaces(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\s+/g, '');
}

/**
 * Generates a random string of the specified length
 * @param {number} length - Length of the random string
 * @returns {string} Random string
 * @example randomString(6) → "aZ2xP9"
 */
export function randomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

/**
 * Counts the number of words in a string
 * @param {string} str - Input string
 * @returns {number} Word count
 * @example countWords("Hello JS World") → 3
 */
export function countWords(str) {
  if (typeof str !== 'string' || str.trim().length === 0) return 0;
  return str.trim().split(/\s+/).length;
}