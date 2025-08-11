let sakib = 79;
let jim = 46;
let kim = 78;

if (sakib > jim && sakib > kim) {
  console.log(`Sakib got the maximum number which is ${sakib}`);
} else if (jim > sakib && jim > kim) {
  console.log(`Jim got the maximum number which is : ${jim}`);
} else {
  console.log(`Kim got the maximum number which is : ${kim}`);
}

function maxOfThree(numberOne, numberTwo, numberThree) {
  if (numberOne > numberTwo && numberOne > numberThree) {
    return numberOne;
  } else if (numberTwo > numberOne && numberTwo > numberThree) {
    return numberTwo;
  } else {
    return numberThree;
  }
}

let result = maxOfThree(47, 90, 99);
console.log(`Maximum number among them is ${result}`);
