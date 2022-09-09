// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process: So the first thing that I need to do it to find out what the boiling point is, which is 212 degrees F.
// The temp of the varible will be either above or below or equal 212 F(int) and there needs to be a check / comparision to see if the variable meet the criteria. I will 
// a conditional statement to help me sort the variables to the right place.

let temp = 42
// Expected output: "42 is below boiling point"

if(temp == 212) {
    console.log(`${temp} is at boiling point`)
} else if (temp > 212) {
    console.log(`${temp} is above boiling point`)
} else if (temp < 212) {
    console.log(`${temp} is below boiling point`)
} else {
    console.log("error")
}

temp = 350
// Expected output: "350 is above boiling point"

if(temp == 212) {
    console.log(`${temp} is at boiling point`)
} else if (temp > 212) {
    console.log(`${temp} is above boiling point`)
} else if (temp < 212) {
    console.log(`${temp} is below boiling point`)
} else {
    console.log("error")
}

temp = 212

if(temp == 212) {
    console.log(`${temp} is at boiling point`)
} else if (temp > 212) {
    console.log(`${temp} is above boiling point`)
} else if (temp < 212) {
    console.log(`${temp} is below boiling point`)
} else {
    console.log("error")
}

// Expected output: "212 is at boiling point"

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: There are two const variables that are arrays, I need to take the two and make them into one and then count the length of the combined arrays
// I will use the built in method .concat() and the built in method .length and then use the console to log the result. I will normally make a new variable with the concat.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let newArray  = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)

console.log(newArray)

console.log(newArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process: There is a built in method call .reverse() and will reverse the array, and then log the result in the console. THE variable is a string and need to be 
// an array before I can reverse it. I will try to write this in fewest line of code possible.

const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"

console.log(currentCohort.split("").reverse().join(""))


//console.log(currentCohort.reverse())

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process: I will use the built in method .lastIndexOf(parm) and pass in the var/value and them log the result in the console.

const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(givenValue1)) // 7

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(givenValue2)) // 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process: The .sortt() method is best option to sort the array from low to high, I think there is a way to reverse how the sort happens so it displays from high to low
// I will display both sorts in console

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoSummerTemperatures.sort()) // [72, 73, 76, 77, 79, 80, 82]
  

console.log(sanDiegoSummerTemperatures.sort((a,b) => b - a)) // [82, 80, 79, 77, 76, 73, 72]
  

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoWinterTemperatures.sort((a,b) => b - a)) // [68, 67, 66, 66, 62, 59, 59]