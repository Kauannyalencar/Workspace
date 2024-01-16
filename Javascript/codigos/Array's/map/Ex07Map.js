const pokemons = new Map()
pokemons.set("Gengar", "Ghost")
pokemons.set("Hunter", "Ghost")
pokemons.set("Lucario", "Fight")
console.log(pokemons);
let  fantasmas = 0

for (const [key, value] of pokemons) {
    console.log(`${key} é um pokémon do tipo ${value}`);
   
    if(value == "Ghost") {
        fantasmas = fantasmas + 1
    }
}
console.log(`Há um total de ${fantasmas} pokémons do tipo ghost no banco de dados`);
;