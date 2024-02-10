const newTrainer = new Map([
    ["nome:", "Izzie Garcia"],
    ["Idade:", 17],
    ["Região:", "Borius"]
])//Array dentro de map

// console.log(newTrainer.keys());
// console.log(newTrainer.values());
// console.log(newTrainer.entries());

newTrainer.set("titulo:" , "Campeão")
for (const [key, value] of newTrainer) {
    console.log(`${key} ${value}`);
}
