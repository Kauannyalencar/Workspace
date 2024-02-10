const set1 = new Set()

set1.add(45);
set1.add(7);
set1.add(3);
set1.add(45);
for (const item of set1) {
    console.log(item);
}

//Possivel encadear valores
const set2 = new Set()

set2.add("Aqui vai ").add(5)
console.log(set2);