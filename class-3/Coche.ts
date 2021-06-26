class Coche {
  // properties
  private _marca: string;
  private _model: string;
  private _velocity: string;

  // constructor
  constructor(marca: string, model: string, velocity: string){
    this._marca = marca;
    this._model = model;
    this._velocity = velocity;
  }

  //accessor and modifier methods
  //get and set

  get marca(): string {
    return this._marca;
  }

  set marca(nMarca: string) {
    this._marca = nMarca;
  }
  
  // methods
  acelerar(): void {
    console.log('Acelerar');
  }

  frenar() {
    console.log('frenar');
  }
}


// instaciation engine V8

const objFerrari = new Coche('Ferrari', 'X-70', '250 km/h');

// objFerrari.acelerar();
// objFerrari.frenar();
console.log(objFerrari.marca);