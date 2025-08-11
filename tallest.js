let heights = [65, 66, 68, 97, 78, 60, 56];

let max = heights[0];
let index = 0;

// Getting a maximum number from an array
for (let [i, height] of heights.entries()) {
  //learned a new thing how to get the index from a for of loop
  //declearing variable like let [i,height] of heights.entries()
  if (max < height) {
    max = height;
    index = i;
  }
}
console.log(`Maximum height is ${max} and their index is : ${index + 1}`);

console.log(`--------------------------------------------------------------`);
//Getting index of a function for the for of loop with the help of arrayName.entries
console.log(`Total element of the array is : ${heights.length}`);
for (let [i, height] of heights.entries()) {
  console.log(`Value is ${height} and index is ${i + 1}`);
}
console.log(`--------------------------------------------------------------`);

// Maximum number through the function
let marks = [67, 78, 45, 90, 97, 54, 45];
function getMax(numbers) {
  max = numbers[0];
  for (let number of numbers) {
    if (max < number) {
      max = number;
    }
  }
  return max;
}
let maximumNumber = getMax(marks);
console.log(`Maximum number is ${maximumNumber}`);
