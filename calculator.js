function addition(numberOne, numbertwo) {
  let sum = numberOne + numbertwo;
  return sum;
}

function substraction(numberOne, numbertwo) {
  const sub = numberOne - numbertwo;
  return sub;
}
function multiplication(numberOne, numbertwo) {
  const multi = numberOne * numbertwo;
  return multi;
}
function division(numberOne, numbertwo) {
  let result = parseFloat((numberOne / numbertwo).toFixed(2));
  return result;
}
function reminder(numberOne, numbertwo) {
  return numberOne % numbertwo;
}

function Calculator(x, y, operation) {
  if (operation === "add") {
    let result = addition(x, y);
    return result;
  } else if (operation === "subs") {
    let result = substraction(x, y);
    return result;
  } else if (operation === "multiply") {
    let result = multiplication(x, y);
    return result;
  } else if (operation === "division") {
    let result = division(x, y);

    return result;
  } else {
    return `Only 'addition', 'subtraction', 'multiplication', and 'division' is allowed`;
  }
}

let result = Calculator(7, 9, "add");
console.log(`The addition of two number is : ${result}`);
let result1 = Calculator(7, 9, "subs");
console.log(`The substraction of two number is : ${result1}`);
let result2 = Calculator(7, 9, "multiply");
console.log(`The multiplication of two number is : ${result2}`);
let result3 = Calculator(7, 9, "division");
console.log(`The division of two number is : ${result3}`);
let result4 = Calculator(7, 9, "divis");
console.log(`The division of two number is : ${result4}`);
