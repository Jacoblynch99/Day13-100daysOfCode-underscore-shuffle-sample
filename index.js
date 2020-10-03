const _ = require("underscore")

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const shuffleArr = _.shuffle(numArr) // returns an array where the elements of the original array are swapped around at random. This does not change the original data.

const sampleArr = _.sample(numArr, 5) // returns an array of a random assortment of numbers from the given array, the amount which is specified by the second argument. This does not change the original data.

console.log(`Underscore Data:`, shuffleArr)
console.log(`Original Data:`, numArr)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, sampleArr)
console.log(`Original Data:`, numArr)
