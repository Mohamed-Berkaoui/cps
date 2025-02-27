interface vehicle {
  make: string;
  model: string;
  year: number;
  start: () => void;
}

class Car implements vehicle {
  make: string;
  model: string;
  year: number;
  constructor(ma: string, mo: string, ye: number) {
    this.make = ma;
    this.model = mo;
    this.year = ye;
  }
  start():void {
 console.log("Car engine started")
  }
}


const mycar=new Car("bmw","501",2020)

mycar.start()