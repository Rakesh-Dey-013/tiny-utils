/**
 * Calculates the greatest common divisor of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Greatest common divisor
 * @example gcd(24, 36) → 12
 */
export function gcd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}

/**
 * Calculates the least common multiple of two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Least common multiple
 * @example lcm(4, 6) → 12
 */
export function lcm(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return NaN;
  return Math.abs(a * b) / gcd(a, b);
}

/**
 * Checks if a number is prime
 * @param {number} n - Number to check
 * @returns {boolean} True if the number is prime
 * @example isPrime(29) → true
 * @example isPrime(30) → false
 */
export function isPrime(n) {
  if (typeof n !== 'number' || n <= 1 || !Number.isInteger(n)) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  
  return true;
}

/**
 * Generates a random integer between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random integer
 * @example randomInt(1, 10) → 7
 */
export function randomInt(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') return NaN;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Calculates the factorial of a number
 * @param {number} n - Input number
 * @returns {number} Factorial of n
 * @example factorial(5) → 120
 */
export function factorial(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return NaN;
  if (n === 0 || n === 1) return 1;
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}

/**
 * Calculates the nth Fibonacci number
 * @param {number} n - Position in Fibonacci sequence
 * @returns {number} Fibonacci number at position n
 * @example fibonacci(6) → 8
 */
export function fibonacci(n) {
  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) return NaN;
  if (n <= 1) return n;
  
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    const temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}

/**
 * Calculates the sum of an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} Sum of array elements
 * @example sum([1, 2, 3]) → 6
 */
export function sum(arr) {
  if (!Array.isArray(arr)) return NaN;
  return arr.reduce((acc, val) => {
    if (typeof val !== 'number') return NaN;
    return acc + val;
  }, 0);
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} arr - Array of numbers
 * @returns {number} Average of array elements
 * @example average([2, 4, 6]) → 4
 */
export function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return NaN;
  const s = sum(arr);
  return isNaN(s) ? NaN : s / arr.length;
}

/**
 * Clamps a value between a minimum and maximum
 * @param {number} value - Value to clamp
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Clamped value
 * @example clamp(15, 0, 10) → 10
 */
export function clamp(value, min, max) {
  if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') return NaN;
  return Math.min(Math.max(value, min), max);
}

/**
 * Rounds a number to the specified number of decimal places
 * @param {number} value - Number to round
 * @param {number} decimals - Number of decimal places
 * @returns {number} Rounded number
 * @example roundTo(3.14159, 2) → 3.14
 */
export function roundTo(value, decimals) {
  if (typeof value !== 'number' || typeof decimals !== 'number') return NaN;
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}