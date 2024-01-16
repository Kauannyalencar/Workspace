const saygins = new Map()
saygins.set("dog", "Woof");
saygins.set("cat", "Meow");
saygins.set("Dragon", "Raaw");// Key e value, respectivamente
saygins.size;
saygins.get("dog");
console.log(saygins.get("cat"));// O que foi atribuido a "cat" = Meow

console.log(saygins.get("Fox"), saygins.has("Girrafa"));//Get - tem, vai dar "underfined" se não haver. 
// Has - tem, vai dar "false" se não tiver.
saygins.delete("dog");
console.log(saygins.has("dog"));
console.log(saygins);

for (const [key, value] of saygins) {
    console.log(`${key} goes ${value}`);
  }