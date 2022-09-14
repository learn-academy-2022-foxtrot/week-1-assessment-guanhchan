// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: This will log the number of chars in the string, which has a count of 10 including the space


// b) Verify and explain: After verifying with the console my answer is correct, There are 10 chars in the variable cohort.


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: This will log the 5th item/ char in the string/ index of the variable. The answer should be "o".

// b) Verify and explain: Verifying with the console the result was "o" and my guess/answer was correct. "o" is the 5th chars and 
// in the 4th index of the string "Hello World!"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: there are two variables one is an array and other is a int(1). The answer is going to log the 1st index of the variable "languages", which is "Ruby"

// b) Verify and explain: After verifying with the console, my answer was correct. The 1st index of "languages" is Ruby. languages[1] = "Ruby"


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase()) // This will error

// a) Your answer: ["SATURDAY", "SUNDAY"]

// b) Verify and explain: After verifying with the console, it gave an error, the reason becuase .toUpperCase() will work for strings, but the variable is an array with 2 sets of strings.
// My answer is incorrect and now all I want to do it to figure out how to make the result the same as my answer.

console.log(weekendDays.join(' ').toUpperCase().split(' ')) // This feels better, I was able to figure out how to code the answer I was looking for.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: The answer will be "number" or "int"

// b) Verify and explain: After verifying with the console. My answer was correct, the method "typeof" will detarmind the type of data type for an item/object
// dataTypes.length will return the length of the variable dataType which has 3 items in the array. The data type of 3 is a "number"/ int
