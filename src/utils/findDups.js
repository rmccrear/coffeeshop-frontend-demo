

const items = ["Espresso", "Mocha",  "Mocha", "Latte", "Mocha", "Espresso"];
var counter = { };

// counter is... {"Espresso": 2, "Mocha": 3, "Latte": 1 }

for(let i=0; i<items.length; i++){
  const item = items[i]; // "Espresso"
  if(counter[item] === undefined) {
    counter[item] = 1;
  } else {
    counter[item]++;
    // counter["Espresso"]++
  }
}

console.log(counter)

const products = [
  {id: "xprs", name: "Espresso"},
  {id: "mocx", name: "Mocha"},
  {id: "mocx", name: "Mocha"},
  {id: "lalala", name: "Latte"},
  {id: "mocx", name: "Mocha"},
]

const counterObj = {};

for(let i=0; i<products.length; i++) {
  const id = products[i].id;
  console.log(i, products[i])
  if(counterObj[id] === undefined) {
    counterObj[id] = 1;
  } else {
    counterObj[id]++;
  }
}
console.log(counterObj)

const wewantthis = [
  {id: "xyz", name: "Espresso", count: 2},
  {id: "mno", name: "Mocha", count : 3},
  {id: "lmnop", name: "Latte", count: 1},
]