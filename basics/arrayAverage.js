// Calculate the average of numbers in an array
const numbers = [10, 20, 30, 40, 50];
const sum = numbers.reduce((a,b) => a + b, 0);
const avg = sum / numbers.length;
console.log('Array:', numbers);
console.log('Average:', avg);
