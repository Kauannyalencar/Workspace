function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const myCar = new Car('Eagle', 'Talon TSi', 1993);
const yourCar = new Car("Ferrari", 'F430', 2006)

console.log(myCar.make);
console.log(yourCar)