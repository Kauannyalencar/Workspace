let arr = [], set = new Set();
let users = ["Jason", "Kimberly", "Billy", "Trini", "Zack", "Tommy"];
for (let i = 0; i < users.length; i++) {
    arr.push(users[i]);
    set.add(users[i]);
}

let result;

console.time('Array');
result = arr.indexOf("Kimberly") !== -1;
console.timeEnd("Array");

console.time("Set");
result = set.has("Kimberly");
console.timeEnd("Set");

//Para demostrar que set é mais rápido que array, melhor para se usar em grandes estruturas de dados.