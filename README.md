# @rakeshdey/tiny-utils

A lightweight, general-purpose JavaScript utility library with helpful functions for **strings, dates, math, arrays, and objects**.  
Zero dependencies. Pure ES modules. 🚀

## 📦 Installation

```bash
npm install @rakeshdey/tiny-utils
```
## 🚀 Usage

```javascript
// Import specific functions

import { capitalize, formatDate, gcd, unique, deepClone } from '@rakeshdey/tiny-utils';
```
```javascript
// Or import everything

import * as utils from '@rakeshdey/tiny-utils';
```


## 📚 API Reference

## 🔤 String Utilities

` capitalize(str) `

Capitalizes the first letter of a string.

```javascript
import { capitalize } from '@rakeshdey/tiny-utils';

capitalize("hello"); // "Hello"
```

`capitalizeWords(str)`

Capitalizes the first letter of each word in a string.

```javascript
import { capitalizeWords } from '@rakeshdey/tiny-utils';

capitalizeWords("hello world"); // "Hello World"
```


`slugify(str)`

Converts a string to a URL-friendly slug.

```javascript
import { slugify } from '@rakeshdey/tiny-utils';

slugify("Hello World!"); // "hello-world"
```

`truncate(str, length)`

Truncates a string to a specified length and appends an ellipsis if it exceeds that length.

```javascript
import { truncate } from '@rakeshdey/tiny-utils';

truncate("Hello World!", 5); // "Hello..."
```

`reverseString(str)`

Reverses a string.

```javascript
import { reverseString } from '@rakeshdey/tiny-utils';

reverseString("Hello World!"); // "!dlroW olleH"
```

`isPalindrome(str)`

Checks if a string is a palindrome.

```javascript
import { isPalindrome } from '@rakeshdey/tiny-utils';

isPalindrome("madam"); // true
isPalindrome("hello"); // false
```

`removeSpaces(str)`

Removes all whitespace from a string.

```javascript
import { removeSpaces } from '@rakeshdey/tiny-utils';

removeSpaces(" Hello   World! "); // "HelloWorld!"
```

`randomString(length)`

Generates a random alphanumeric string of a specified length.

```javascript
import { randomString } from '@rakeshdey/tiny-utils';

randomString(10); // "a1b2c3d4e5"
```

`countWords(str)`
Counts the number of words in a string.

```javascript
import { countWords } from '@rakeshdey/tiny-utils';

countWords("Hello World!"); // 2
```

## 📅 Date & Time Utilities

`formatDate(date, format)`

Formats a date object into a specified string format.

```javascript
import { formatDate } from '@rakeshdey/tiny-utils';

formatDate(new Date(2025, 8, 5), "DD/MM/YYYY"); // "05/09/2025"
```

`timeAgo(date)`

Returns a human-readable time ago string.

```javascript
import { timeAgo } from '@rakeshdey/tiny-utils';

timeAgo(new Date(2025, 8, 5)); // "in 2 years"
timeAgo(new Date(Date.now() - 60000)); // "1m ago"
```

`daysBetween(date1, date2)`

Returns the number of days between two dates.

```javascript
import { daysBetween } from '@rakeshdey/tiny-utils';

daysBetween("2025-01-01", "2025-01-10"); // 9
```

`isLeapYear(year)`

Checks if a year is a leap year.

```javascript
import { isLeapYear } from '@rakeshdey/tiny-utils';

isLeapYear(2024); // true
isLeapYear(2025); // false
```

`addDays(date, n)`

Adds a specified number of days to a date.

```javascript
import { addDays } from '@rakeshdey/tiny-utils';

addDays(new Date("2025-09-05"), 7); // "2025-09-12"
```

`startOfDay(date)`

Returns the start of the day for a given date.

```javascript
import { startOfDay } from '@rakeshdey/tiny-utils';

startOfDay(new Date("2025-09-05T12:34:56")); // new Date("2025-09-05T00:00:00")
```

`endOfDay(date)`

Returns the end of the day for a given date.

```javascript
import { endOfDay } from '@rakeshdey/tiny-utils';

endOfDay(new Date("2025-09-05T12:34:56")); // new Date("2025-09-05T23:59:59")
```

## ➗ Math Utilities

`gcd(a, b)`

Calculates the greatest common divisor of two numbers.

```javascript
import { gcd } from '@rakeshdey/tiny-utils';

gcd(12, 8); // 4
```

`lcm(a, b)`

Calculates the least common multiple of two numbers.

```javascript
import { lcm } from '@rakeshdey/tiny-utils';

lcm(12, 8); // 24
```

`isPrime(n)`

Checks if a number is prime.

```javascript
import { isPrime } from '@rakeshdey/tiny-utils';

isPrime(11); // true
isPrime(12); // false
```

`factorial(n)`

Calculates the factorial of a number.

```javascript
import { factorial } from '@rakeshdey/tiny-utils';

factorial(5); // 120
```

`randomInt(min, max)`

Generates a random integer between two specified values.

```javascript
import { randomInt } from '@rakeshdey/tiny-utils';

randomInt(1, 10); // 5 (random value between 1 and 10)
```

`fibonacci(n)`

Calculates the nth Fibonacci number.

```javascript
import { fibonacci } from '@rakeshdey/tiny-utils';

fibonacci(6); // 8
```

`sum(arr)`

Calculates the sum of all numbers in an array.

```javascript
import { sum } from '@rakeshdey/tiny-utils';

sum([1, 2, 3, 4, 5]); // 15
```

`average(arr)`

Calculates the average of all numbers in an array.

```javascript
import { average } from '@rakeshdey/tiny-utils';

average([1, 2, 3, 4, 5]); // 3
```

`clamp(value, min, max)`

Clamps a number between a minimum and maximum value.

```javascript
import { clamp } from '@rakeshdey/tiny-utils';

clamp(5, 1, 10); // 5
clamp(0, 1, 10); // 1
clamp(15, 1, 10); // 10
```

`roundTo(value, decimals)`

Rounds a number to a specified number of decimal places.

```javascript
import { roundTo } from '@rakeshdey/tiny-utils';

roundTo(5.12345, 2); // 5.12
```

## 🧮 Array Utilities

`unique(arr)`

Removes duplicate values from an array.

```javascript
import { unique } from '@rakeshdey/tiny-utils';

unique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```

`flatten(arr)`

Flattens a nested array.

```javascript
import { flatten } from '@rakeshdey/tiny-utils';

flatten([1, [2, [3, 4]], 5]); // [1, 2, 3, 4, 5]
```

`chunk(arr, size)`

Splits an array into chunks of a specified size.

```javascript
import { chunk } from '@rakeshdey/tiny-utils';

chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]
```

`shuffle(arr)`

Randomly shuffles the elements of an array.

```javascript
import { shuffle } from '@rakeshdey/tiny-utils';

shuffle([1, 2, 3, 4, 5]); // [3, 1, 4, 5, 2] (randomized)
```

`max(arr)`

Returns the maximum value from an array.

```javascript
import { max } from '@rakeshdey/tiny-utils';

max([1, 2, 3, 4, 5]); // 5
```

`min(arr)`

Returns the minimum value from an array.

```javascript
import { min } from '@rakeshdey/tiny-utils';

min([1, 2, 3, 4, 5]); // 1
```

`compact(arr)`

Removes falsy values from an array.

```javascript
import { compact } from '@rakeshdey/tiny-utils';

compact([0, 1, false, 2, '', 3]); // [1, 2, 3]
```

## 🗃️ Object Utilities

`deepClone(obj)`

Creates a deep clone of an object.

```javascript
import { deepClone } from '@rakeshdey/tiny-utils';

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original); // {a: 1, b: {c: 2}} (new reference)
copy.b.c = 3;

console.log(original.b.c); // 2
console.log(copy.b.c); // 3
```

`mergeObjects(obj1, obj2)`

Merges two objects into one.

```javascript
import { mergeObjects } from '@rakeshdey/tiny-utils';

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = mergeObjects(obj1, obj2);

console.log(merged); // { a: 1, b: 3, c: 4 }
```

`isEmpty(obj)`

Checks if an object is empty (i.e., has no own properties).

```javascript
import { isEmpty } from '@rakeshdey/tiny-utils';

isEmpty({}); // true
isEmpty({ a: 1 }); // false
```

`pick(obj, keys)`

Creates a new object with only the specified keys from the original object.

```javascript
import { pick } from '@rakeshdey/tiny-utils';

const original = { a: 1, b: 2, c: 3 };
const picked = pick(original, ['a', 'c']);

console.log(picked); // { a: 1, c: 3 }
```

`omit(obj, keys)`

Creates a new object with all keys from the original object except the specified ones.

```javascript
import { omit } from '@rakeshdey/tiny-utils';

const original = { a: 1, b: 2, c: 3 };
const omitted = omit(original, ['b']);

console.log(omitted); // { a: 1, c: 3 }
```

`invert(obj)`

Inverts the keys and values of an object.

```javascript
import { invert } from '@rakeshdey/tiny-utils';

const original = { a: 1, b: 2, c: 3 };
const inverted = invert(original);

console.log(inverted); // { 1: 'a', 2: 'b', 3: 'c' }
```

## 🛠️ Technologies Used
<p align="left">
  <!-- JavaScript -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" width="40" height="40"/>
  <!-- Node.js -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" width="40" height="40"/>
  <!-- NPM -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="NPM" width="40" height="40"/>
  <!-- Git -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" width="40" height="40"/>
  <!-- GitHub -->
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="40" height="40"/>
</p>

---

## 📝 License
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)  
This project is licensed under the **MIT License**. See the [`LICENSE`](./LICENSE) file for details.

---

## 🤝 Contributing
Contributions are welcome! 🎉  
- Open an issue or submit a pull request.  
- Please follow the existing code style.  
- Include tests for any new features or bug fixes.  

---

## 👨‍💻 Authors
- **[Rakesh Kr. Dey](https://www.github.com/Rakesh-Dey-013)**  

📩 **[Contact Me](mailto:rakesh.coding.007@gmail.com)**  
Feel free to reach out with any **questions, suggestions, or collaboration ideas**!
