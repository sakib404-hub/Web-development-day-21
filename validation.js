//Validation of only numbers
function multiply(numberOne, numbertwo) {
  if (typeof numberOne !== "number" || typeof numbertwo !== "number") {
    return "please provide numbers";
  } else {
    const multi = numberOne * numbertwo;
    return multi;
  }
}

let result = multiply(5 + 7, 5);
console.log(`Result : ${result}`);

//Validation of only the string
function fullName(firstName, lastName) {
  if (typeof firstName !== "string" || typeof lastName !== "string") {
    return "Please Kindly provide a String";
  } else {
    let fullName = firstName + " " + lastName;
    return fullName;
  }
}

let result1 = fullName("Sakib", "Hossen");
console.log(result1);
// let name = "sakib";
// console.log(typeof name);

//Validation of only Object
//In javascript the typeof an array is also an object
function getPrice(product) {
  if (typeof product !== "object") {
    return "please provide an object";
  } else if (Array.isArray(product) === true) {
    return "please provide an object";
  } else {
    const price = product.price;
    return price;
  }
}
let products = {
  name: "chukani dandi",
  price: 35,
  color: "blue",
};

let price = getPrice(products);
console.log(`Price of the product is : ${price}`);

let price2 = getPrice([8, 2, 4]);
console.log("price is : ", price2);
