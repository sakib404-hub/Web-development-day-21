let disha = 56;
let salma = 79;

if (disha > salma) {
  console.log(`Disha got the maximum number among them : ${disha}`);
} else {
  console.log(`Salma got the maximum number among them : ${salma}`);
}

function getMax(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}

let result = getMax(97, 89);
let result2 = getMax(-1, -100);
let ultimateMax = getMax(result, result2);
console.log(`Max of the two number is ${result}`);
console.log(`Max of the two number is ${result2}`);
console.log(`Max of the two number is ${ultimateMax}`);
