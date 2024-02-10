const map = new Map();
map.set("Pokemon", "Charmander")
map.set("time", "Salamence")
//ADD "Pokemon" como key e "Charmander" como value
console.log(map);
console.log(`${map.get("Pokemon")} eu escolho você`);
//Pega o value de "Pokemon"
console.log("O tamanho do map é", map.size);
console.log(map.has("Pokemon"));