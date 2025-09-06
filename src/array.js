/**
 * Returns a new array with only unique values
 * @param {Array} arr - Input array
 * @returns {Array} Array with unique values
 * @example unique([1, 2, 2, 3]) → [1, 2, 3]
 */
export function unique(arr) {
  if (!Array.isArray(arr)) return [];
  return [...new Set(arr)];
}

/**
 * Flattens a nested array to a specified depth
 * @param {Array} arr - Input array
 * @param {number} depth - Depth to flatten (default: Infinity)
 * @returns {Array} Flattened array
 * @example flatten([1, [2, [3]]]) → [1, 2, 3]
 */
export function flatten(arr, depth = Infinity) {
  if (!Array.isArray(arr)) return [];
  
  return arr.reduce((acc, val) => {
    if (Array.isArray(val) && depth > 0) {
      return acc.concat(flatten(val, depth - 1));
    } else {
      return acc.concat(val);
    }
  }, []);
}

/**
 * Splits an array into chunks of the specified size
 * @param {Array} arr - Input array
 * @param {number} size - Chunk size
 * @returns {Array} Array of chunks
 * @example chunk([1, 2, 3, 4], 2) → [[1, 2], [3, 4]]
 */
export function chunk(arr, size) {
  if (!Array.isArray(arr) || typeof size !== 'number' || size <= 0) return [];
  
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  
  return result;
}

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param {Array} arr - Input array
 * @returns {Array} Shuffled array
 * @example shuffle([1, 2, 3, 4]) → [3, 1, 4, 2]
 */
export function shuffle(arr) {
  if (!Array.isArray(arr)) return [];
  
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  
  return result;
}

/**
 * Finds the maximum value in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Maximum value
 * @example max([1, 5, 3]) → 5
 */
export function max(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return NaN;
  return Math.max(...arr);
}

/**
 * Finds the minimum value in an array
 * @param {number[]} arr - Array of numbers
 * @returns {number} Minimum value
 * @example min([1, 5, 3]) → 1
 */
export function min(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return NaN;
  return Math.min(...arr);
}

/**
 * Removes falsy values from an array
 * @param {Array} arr - Input array
 * @returns {Array} Array without falsy values
 * @example compact([0, 1, false, 2, "", 3]) → [1, 2, 3]
 */
export function compact(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.filter(Boolean);
}