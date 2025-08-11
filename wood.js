/**
 *  Chair - 3 cft
 * Table - 10 cft
 * Bed - 50 cft
 */

function woodQuantityCalculator(chairQuantity, tableQuantity, bedQuantity) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  let totalWood =
    perChairWood * chairQuantity +
    perTableWood * tableQuantity +
    perBedWood * bedQuantity;
  return totalWood;
}

const required = woodQuantityCalculator(12, 2, 2);
console.log(`Total wood required is : ${required}`);
const required2 = woodQuantityCalculator(0, 2, 4);
console.log(`Total wood required is : ${required2}`);
console.log(`-----------------------------------------------------`);
/**
 * Shirt price -> 500
 * Pant Price -> 700
 * Shoe Price -> 800
 */

function marketCalculator(shirtQuantity, pantQuantity, ShoeQuantity) {
  const shirtPrice = 500;
  const pantPrice = 700;
  const shoePrice = 900;

  let totalPrice =
    shirtQuantity * shirtPrice +
    pantQuantity * pantPrice +
    ShoeQuantity * shoePrice;
  return totalPrice;
}

let totalPrice = marketCalculator(2, 2, 1);
console.log(`Total price for the shirt , pant and shoe is : ${totalPrice}`);
