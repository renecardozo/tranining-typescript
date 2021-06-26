interface Person {
  id: number;
  name: string;
  age: number;
}


interface Item {
  id: number;
  name: string;
  price: number;
}

(
  function exampleTupla() {
    // tupla primitive types
    let myTupla: [string, number];
    myTupla = ['Lucas', 12];
    console.log(`Name: ${myTupla[0]} price: ${myTupla[1]}`);
    myTupla.push('numer');

    // tupla custom types
    let tuplaObj: [Person, Item];
    tuplaObj = [{
      id: 12,
      name: 'pepe',
      age: 123
    }, {
      id: 13,
      name: 'iPhone',
      price: 23
    }];
    console.log(tuplaObj);

    // use case
    let rgb: [number, number, number];
    rgb = [250,250,250];
    let rgba: [number, number, number, number];
    rgba = [123,255,250, 0.2];

  }
)();