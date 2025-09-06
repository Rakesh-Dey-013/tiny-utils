/**
 * Formats a date according to the specified format
 * @param {Date} date - Date object to format
 * @param {string} format - Format string (e.g., "DD/MM/YYYY")
 * @returns {string} Formatted date string
 * @example formatDate(new Date(2025, 8, 5), "DD/MM/YYYY") → "05/09/2025"
 */
export function formatDate(date, format = "DD/MM/YYYY") {
  if (!(date instanceof Date) || isNaN(date)) return 'Invalid Date';
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds);
}

/**
 * Returns a human-readable time ago string
 * @param {Date} date - Date to calculate time ago from
 * @returns {string} Time ago string
 * @example timeAgo(new Date(Date.now() - 60000)) → "1m ago"
 */
export function timeAgo(date) {
  if (!(date instanceof Date) || isNaN(date)) return 'Invalid Date';
  
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);
  
  if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)}mo ago`;
  
  return `${Math.floor(diffInSeconds / 31536000)}y ago`;
}

/**
 * Calculates the number of days between two dates
 * @param {Date|string} date1 - First date
 * @param {Date|string} date2 - Second date
 * @returns {number} Number of days between dates
 * @example daysBetween("2025-01-01", "2025-01-10") → 9
 */
export function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  if (isNaN(d1) || isNaN(d2)) return NaN;
  
  const timeDiff = Math.abs(d2 - d1);
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
}

/**
 * Checks if a year is a leap year
 * @param {number} year - Year to check
 * @returns {boolean} True if the year is a leap year
 * @example isLeapYear(2024) → true
 * @example isLeapYear(2025) → false
 */
export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Adds a specified number of days to a date
 * @param {Date} date - Original date
 * @param {number} n - Number of days to add
 * @returns {Date} New date with days added
 * @example addDays(new Date("2025-09-05"), 7) → "2025-09-12"
 */
export function addDays(date, n) {
  if (!(date instanceof Date) || isNaN(date)) return new Date(NaN);
  
  const result = new Date(date);
  result.setDate(result.getDate() + n);
  return result;
}

/**
 * Returns the start of the day for a given date
 * @param {Date} date - Input date
 * @returns {Date} Start of the day
 * @example startOfDay("2025-09-05T15:45:00") → "2025-09-05T00:00:00"
 */
export function startOfDay(date) {
  if (!(date instanceof Date) || isNaN(date)) return new Date(NaN);
  
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
}

/**
 * Returns the end of the day for a given date
 * @param {Date} date - Input date
 * @returns {Date} End of the day
 * @example endOfDay("2025-09-05T15:45:00") → "2025-09-05T23:59:59"
 */
export function endOfDay(date) {
  if (!(date instanceof Date) || isNaN(date)) return new Date(NaN);
  
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
}