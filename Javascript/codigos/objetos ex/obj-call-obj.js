function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const allen = new Person("Allen Racnela", 21, "Female")

console.log(allen);

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }
// const myCar = new Car('Eagle', 'Talon TSi', 1993, allen);
// const yourCar = new Car("Ferrari", 'F430', 2006)


// console.log(myCar.owner.name);//Acessando o nome diretamente

// console.log(myCar.owner);/* Só mostra o objeto em si, give a try! */

// // teste 3: "x" não recebe as infor de "some", recebe some por inteiro
// const some = new Object()
// some.firstName = "Allen";
// some.lastName = "Racnela"
// some.age = 21;

// console.log(`${some.firstName} is ${some.age} years old`);

// const x = some;
// console.log(x);
// // var s = "Hello"
// // console.log(s[1]);   É assim que se pega um letra especifica, como uma array.

// console.log(typeof allen);

// const myObject = {
//     city: "Madrid", greet() {
//         console.log(`Greeting from ${this.city}`)
//     }
// }

// myObject.greet()
// console.log(typeof Car)
