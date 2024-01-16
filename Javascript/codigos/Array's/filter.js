function pokeFilter(pokemon) {
    return pokemon.startsWith("T");
}

const pokemons = ["Salamence", "Empoleon", "Lucario", "Typhosion" , "Scepile", "Emboar", "Taylor", "Latios", "Tyrant"]

const filtrado = pokemons.filter(pokeFilter)

console.log(filtrado);

const cats = ["Leopardo", "Jaguar", "Malhado", "Tigre", "Leão"];

const filtro = cats.filter((cat) => cat.startsWith("L"));
console.log(filtro);