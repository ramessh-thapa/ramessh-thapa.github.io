"use strict";

// 1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-thenelse construct available in Javascript.

function max(x, y) {
   return x >= y ? x : y;
}

// 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(x, y, z) {
   if (x >= y && x >= z)
      return x;
   else if (y >= x && y >= z)
      return y;
   else
      return z;
}

// 3. Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(char) {
   let vowels = ['a', 'b', 'c', 'd', 'e'];
   return vowels.includes(char.toLowerCase());
}

// 4. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an
// input array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// Note/Hint: Do these using Imperative programming approach (i.e. for…loop or while…loop)

function sum(arr) {
   let retVal = 0;
   for (let i = 0; i < arr.length; i++) {
      retVal += arr[i];
   }
   return retVal;
}

function multiply(arr) {
   let retVal = 1;
   for (let i = 0; i < arr.length; i++) {
      retVal *= arr[i];
   }
   return retVal;
}

// 5. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj"

function reverse(str) {
   return str.split('').reverse().join('');
}

//6. Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function longestWord(arr) {
   let lItem = arr[0];
   for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > lItem.length)
         lItem = arr[i];
   }
   return lItem;
}

//7. Write a function filterLongWords() that takes an array of words and an integer i and returns a new array
// containing only those words that were longer than i characters.

function filterLongWords(array, i) {
   return array.filter(e => e.length > i);
}

// 8. Write a function named, computeSumOfSquares, that takes as input, an array of numbers and calculates and
// returns the sum of the squares of each number in the input array. E.g. computeSumOfSquares([1,2,3]) should be
// computed as 1^2 + 2^2 +3^2 = 14. Note: Write your Javascript code without using Imperative programming. i.e. Do
// NOT use any explicit looping construct; instead use functional programming style/approach.

function computeSumOfSquares(arr) {
   return arr.reduce((x, y) => x + y * y, 0);
}

// 9. Write a function named, printOddNumbersOnly, that takes as input, an array of integral numbers and it finds
// and prints only the numbers which are odd.

function printOddNumbersOnly(arr) {
   arr.filter(x => x % 2 != 0).forEach(y => console.log(y));
}

// 10. Write a function named, computeSumOfSquaresOfEvensOnly, that takes as input, an array of integral numbers
// and calculates and returns the sum of the squares of only the even numbers in the input array. E.g.
// computeSumOfSquaresOfEvensOnly ([1,2,3,4,5]) should be computed as 2^2 +4^2 = 20.

function computeSumOfSquaresOfEvensOnly(arr) {
   return arr.filter(x => x % 2 == 0).reduce((y, z) => y + z * z, 0);
}

// 11. Using the Array.reduce(…) function, re-implement your functions, sum(…) and multiply(…) (defined in Problem 4
// above) without using Imperative programming. i.e. Do NOT use any explicit looping construct; instead use
// functional programming style/approach. 

function sumUsingFunctional(arr) {
   return arr.reduce((x, y) => x + y, 0);
}

function multiplyUsingFunctional(arr) {
   return arr.reduce((x, y) => x * y, 1);
}

// 12. Implement Javascript code for a function named, findSecondBiggest, which takes as input, an array of numbers
// and finds and returns the second biggest of the numbers. For example, findSecondBiggest([1,2,3,4,5]) should
// return 4. And findSecondBiggest([19,9,11,0,12]) should return 12. (Note: Do not use sorting!)

function findSecondBiggest(arr) {
   let firstB = -Infinity;
   let secondB = -Infinity;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > firstB) {
         secondB = firstB;
         firstB = arr[i];
      } else if (arr[i] > secondB)
         secondB = arr[i];
   }
   return secondB;
}

// 13. Write a function named printFibo, that takes as input, a given length, n, and any two starting numbers a and b,
// and it prints-out the Fibonacci sequence, e.g. (0, 1, 1, 2, 3, 5, 8, 13, 21, 34,…) of the given length, beginning with
// a and b. (e.g. printFibo(n=1, a=0, b=1), prints-out: "0", as output; printFibo(n=2, a=0, b=1), prints-out: "0, 1", as 
// output; printFibo(n=3, a=0, b=1), prints-out: "0, 1, 1", as output; printFibo(n=6, a=0, b=1), prints-out: "0, 1, 1, 2,
// 3, 5", as output; and printFibo(n=10, a=0, b=1), prints-out: "0, 1, 1, 2, 3, 5, 8, 13, 21, 34", as output).

function printFibo(n, a, b) {
   let str = "";
   if (n <= 0) return;
   if (n >= 1) str = str + a + ", ";
   if (n >= 2) str = str + b + ", ";

   for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
      if (i == n)
         str = str + c + "";
      else
         str = str + c + ", ";
   }
   console.log(str);
}

// 14. Use Array Methods: filter, map, reduce, etc to implement functions below:
// 1. Create a function using function declaration named sum with one parameter of Array type, the returned
// result is the sum of all elements which are greater than 20.
// 2. Create a function using function expression named getNewArray with one parameter of String Array,
// return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.

//14.1
function sumGreaterThan20(arr) {
   return arr.filter(x => x > 20).reduce((y, z) => y + z, 0);
}

//14.2

function getNewArray(arr) {
   return arr.filter(x => x.length >= 5 && x.includes("a"));
}