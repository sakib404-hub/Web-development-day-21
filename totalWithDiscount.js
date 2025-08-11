/**
 * Bellow 100(0 to 100) ---> No discount allowed ;
 * More then 100(101-200): ---> 10% discount
 * more then 200(will begin from 201) ----> 30% discount
 */

// With only the quantity
//Following with a certain quantity only or the Overall quantity
function discountedPrice(quantity) {
  let total;
  if (quantity <= 100) {
    //quantity <= 100
    total = quantity * 100;
    return total;
  } else if (quantity > 100 && quantity <= 200) {
    //quantity <= 200
    total = quantity * 90;
    return total;
  } else if (quantity > 200) {
    //we can also use only else
    total = quantity * 70;
    return total;
  }
}

let total = discountedPrice(100);
console.log(`Total price is : ${total}`);
let total1 = discountedPrice(108);
console.log(`Total price is : ${total1}`);
let total2 = discountedPrice(201);
console.log(`Total price is : ${total2}`);
console.log(`-------------------------------------------`);
/**
 * Layered Discount
 * first 100 ---> must 100
 * 101 - 200 ------> 90
 * above 200(201) ---> 70
 */

console.log(`Layered Discount ---->`);
function layereDiscount(quantity) {
  const fisrt100Price = 100;
  const second100Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    let total = quantity * fisrt100Price;
    return total;
  } else if (quantity <= 200) {
    let remaining = quantity % 100;
    let total = 100 * fisrt100Price + remaining * second100Price;
    return total;
  } else {
    let remaining = quantity % 200;
    let total =
      100 * fisrt100Price + 100 * second100Price + remaining * above200Price;
    return total;
  }
}

let cost = layereDiscount(100);
console.log(`Total price is : ${cost}`);
let cost1 = layereDiscount(170);
console.log(`Total price is : ${cost1}`);
let cost2 = layereDiscount(210);
console.log(`Total price is : ${cost2}`);
