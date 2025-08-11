console.log(`Product Pricing Calculations Without Quantity`);
const product = [
  { name: "shampo", price: 300 },
  { name: "chiruni", price: 100 },
  { name: "shirt", price: 700 },
  { name: "pant", price: 1200 },
];

const numbers = [300, 100, 700, 1200];

function totalCost(products) {
  let sum = 0;
  for (let product of products) {
    sum += product.price;
  }
  return sum;
}
const cost = totalCost(product);
console.log(`Total cost of the prices is : ${cost}`);
console.log(`----------------------------------------`);

console.log(`Product Pricing Calculations with Quantity`);
const products = [
  { name: "shampo", price: 300, quantity: 3 },
  { name: "chiruni", price: 100, quantity: 2 },
  { name: "shirt", price: 700, quantity: 5 },
  { name: "pant", price: 1200, quantity: 1 },
];

function totalCostOfProducts(product) {
  let cost = 0;
  for (let product of products) {
    let productPrice = product.price * product.quantity;
    cost += productPrice;
  }
  return cost;
}
const totalPrice = totalCostOfProducts(products);
console.log(`Total product price is ${totalPrice}`);
