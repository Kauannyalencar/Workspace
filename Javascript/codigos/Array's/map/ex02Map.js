
function toUpper(string) {
    return string.toUpperCase();
}


const cats = [ "Leão", "Malhado", "Leopardo", "Jaguar"]

const upperCats = cats.map(toUpper);

console.log(upperCats);//Map não altera o array original, é um loop, fazendo alterações em cada item da coleção
for (const cada of upperCats) {
    console.log(cada);
}