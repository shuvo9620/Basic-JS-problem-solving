//Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

function reverseString(inputString) {
    let reversedString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    return reversedString;
}

// Example:
const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log(reversedString);
// Output: "dlrow olleh"

//Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

function sumOfPositiveNumbers(numbersArray) {
    let sum = 0;
    for (let num of numbersArray) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

// Example:
const inputArray = [2, -5, 10, -3, 7];
const sumOfPositives = sumOfPositiveNumbers(inputArray);
console.log(sumOfPositives);
// Output: 19


//Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
function mostFrequentElement(arr) {
    const frequencyMap = {};
    let mostFrequent = arr[0];
    let maxFrequency = 1;

    for (let num of arr) {
        frequencyMap[num] = frequencyMap[num] ? frequencyMap[num] + 1 : 1;
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

// Example:
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequent = mostFrequentElement(inputArray);
console.log(mostFrequent);
// Output: 3

//Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
function findTwoNumbersAddingToTarget(sortedArray, target) {
    let left = 0;
    let right = sortedArray.length - 1;

    while (left < right) {
        const sum = sortedArray[left] + sortedArray[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

// Example:
const inputArray = [1, 3, 6, 8, 11, 15];
const targetValue = 9;
const resultIndices = findTwoNumbersAddingToTarget(inputArray, targetValue);
console.log(resultIndices); 
// Output: [1, 2]

//Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function simpleCalculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

// Example:
const num1 = 10;
const num2 = 5;
const operator = "+";
const result = simpleCalculator(num1, num2, operator);
console.log(result);
 // Output: 15

 //Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

 function romanToInteger(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanNumerals[romanNumeral[i]];
    const nextSymbolValue = romanNumerals[romanNumeral[i + 1]];

    if (currentSymbolValue < nextSymbolValue) {
      result -= currentSymbolValue;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

// Example:
const romanNumeral = "IX";
const integerValue = romanToInteger(romanNumeral);
console.log(integerValue); 
// Output: 9

//Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < romanNumeral.length; i++) {
    const currentSymbolValue = romanNumerals[romanNumeral[i]];
    const nextSymbolValue = romanNumerals[romanNumeral[i + 1]];

    if (currentSymbolValue < nextSymbolValue) {
      result -= currentSymbolValue;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

// Example:
const romanNumeral = "IX";
const integerValue = romanToInteger(romanNumeral);
console.log(integerValue); 

// Output: 9





