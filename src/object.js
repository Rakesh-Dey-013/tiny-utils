/**
 * Creates a deep clone of an object
 * @param {Object} obj - Object to clone
 * @returns {Object} Deep cloned object
 * @example deepClone({a:1, b:{c:2}}) → {a:1, b:{c:2}} (new reference)
 */
export function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof Array) return obj.map(item => deepClone(item));
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  
  return cloned;
}

/**
 * Merges two objects deeply
 * @param {Object} obj1 - First object
 * @param {Object} obj2 - Second object
 * @returns {Object} Merged object
 * @example mergeObjects({a:1}, {b:2}) → {a:1, b:2}
 */
export function mergeObjects(obj1, obj2) {
  const result = deepClone(obj1);
  
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj2[key] === 'object' && obj2[key] !== null && 
          typeof result[key] === 'object' && result[key] !== null) {
        result[key] = mergeObjects(result[key], obj2[key]);
      } else {
        result[key] = deepClone(obj2[key]);
      }
    }
  }
  
  return result;
}

/**
 * Checks if an object is empty
 * @param {Object} obj - Object to check
 * @returns {boolean} True if the object is empty
 * @example isEmpty({}) → true
 */
export function isEmpty(obj) {
  if (obj === null || typeof obj !== 'object') return true;
  return Object.keys(obj).length === 0;
}

/**
 * Creates a new object with only the specified keys
 * @param {Object} obj - Source object
 * @param {Array} keys - Keys to pick
 * @returns {Object} Object with only the picked keys
 * @example pick({a:1, b:2}, ["a"]) → {a:1}
 */
export function pick(obj, keys) {
  if (obj === null || typeof obj !== 'object') return {};
  if (!Array.isArray(keys)) return {};
  
  const result = {};
  for (const key of keys) {
    if (key in obj) {
      result[key] = deepClone(obj[key]);
    }
  }
  
  return result;
}

/**
 * Creates a new object without the specified keys
 * @param {Object} obj - Source object
 * @param {Array} keys - Keys to omit
 * @returns {Object} Object without the omitted keys
 * @example omit({a:1, b:2}, ["b"]) → {a:1}
 */
export function omit(obj, keys) {
  if (obj === null || typeof obj !== 'object') return {};
  if (!Array.isArray(keys)) return deepClone(obj);
  
  const result = deepClone(obj);
  for (const key of keys) {
    delete result[key];
  }
  
  return result;
}

/**
 * Inverts the keys and values of an object
 * @param {Object} obj - Object to invert
 * @returns {Object} Inverted object
 * @example invert({a:1, b:2}) → {1:"a", 2:"b"}
 */
export function invert(obj) {
  if (obj === null || typeof obj !== 'object') return {};
  
  const result = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (value !== null && typeof value !== 'undefined') {
        result[value] = key;
      }
    }
  }
  
  return result;
}