let prices = [20000, 16000, 50000, 100000, 12000, 30000];

function minNumber(numbers) {
  let minnimum = numbers[0];
  for (let number of numbers) {
    if (minnimum > number) {
      minnimum = number;
    }
  }
  return minnimum;
}

let cheap = minNumber(prices);
console.log(`Minimum is : ${cheap}`);
console.log(`----------------------------------------`);

const mobiles = [
  { name: "Samsung", price: 20000, camera: "12MP", color: "black" },
  { name: "Xiomi", price: 18000, camera: "12MP", color: "black" },
  { name: "Oppo", price: 30000, camera: "12MP", color: "black" },
  { name: "Iphone", price: 100000, camera: "12MP", color: "black" },
  { name: "Walton", price: 31000, camera: "12MP", color: "black" },
  { name: "HTC", price: 12000, camera: "12MP", color: "black" },
];

function getChepest(chepestPhone) {
  let minimum = chepestPhone[0];
  for (let mobile of chepestPhone) {
    if (minimum.price > mobile.price) {
      minimum = mobile;
    }
  }
  return minimum;
}

let cheapest = getChepest(mobiles);
console.log(cheapest);
// console.log(`Chepest Phone is : ${cheapest}`); why its giving me object and object ?
