let marks = [67, 78, 45, 90, 97, 54, 45];

function minNumber(numbers) {
  let minnimum = numbers[0];
  for (let number of numbers) {
    if (minnimum > number) {
      minnimum = number;
    }
  }
  return minnimum;
}

let result = minNumber(marks);
console.log(`Minimum number is : ${result}`);
console.log(`------------------------------------`);

let heights = [65, 66, 68, 97, 78, 60, 56];

let minHeight = heights[0];
let index;
for (let [i, height] of heights.entries()) {
  if (minHeight > height) {
    minHeight = height;
    index = i + 1;
  }
}
console.log(`Minimum Height is ${minHeight} and it's index is ${index}`);
