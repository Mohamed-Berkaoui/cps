var Car = /** @class */ (function () {
    function Car(ma, mo, ye) {
        this.make = ma;
        this.model = mo;
        this.year = ye;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var mycar = new Car("bmw", "501", 2020);
mycar.start();
