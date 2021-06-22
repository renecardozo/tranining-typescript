// let box;
// console.log(typeof box);
// box = 'hello';
// console.log(typeof box);
// box = 100;
// console.log(typeof box);

// One of the common probles in javascript
function getItem(id) {
  return {
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 90.5
  }
}


function printItem(name, price) {
  console.log(`The item ${name} cost $${price}`);
}

const item = getItem(22);
printItem(item.price, item.name);




