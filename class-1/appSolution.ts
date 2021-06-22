interface Product {
  id: number;
  name: string;
  price: number;
}

interface Item {
  id: string;
  name: number;
  price: number;
}

const getProduct = (id: number): Product => {
  return {  
    id: id,
    name: `Awesome Gadget ${id}`,
    price: 90.5
  }
}


const showProduct = (name: string, price: number): string => {
  return `The item ${name} cost $${price}`;
}


const product = getProduct(123);
console.log(showProduct(product.name, product.price));