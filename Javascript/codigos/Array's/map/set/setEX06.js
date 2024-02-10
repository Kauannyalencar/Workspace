const user1 = new Map();
user1.set('id', 1);
user1.set('name', 'John');

for (const [key, value] of user1) {
    console.log(`Sua chave ${key} e o valor atribuido a ela: ${value}`);
}

console.log(user1.get('id'));

let iterator = user1.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());
