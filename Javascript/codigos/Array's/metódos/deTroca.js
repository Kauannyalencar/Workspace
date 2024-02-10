const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.shift();
console.log(fruits);


let fruta = fruits.slice(2)
console.log(fruta);

fruits.splice(2,0, "Grape")
console.log(fruits);
const arr1 = ["Cecilie ","Luis", "Lone"];
const arr2 = ["Emil ", "Tobias", "Linus"];
const arr3 = ["Robin ", " Morgan "];

const myChildren = arr1

let nomesAnd = "Seus netos são ";
console.log(myChildren.length);

for (let i = 0; i < myChildren.length; i++){
    if (i === myChildren.length - 1) {
        nomesAnd += `and ${myChildren[i]}.`;
    } else {
        nomesAnd += `${myChildren[i]},`
    }
}

console.log(nomesAnd);