let map = new Map()

map.set('Dragon','Salamence')
    .set('Fight',"Riolu")
    .set("Water", "Empoleon")
    .set("Arcanine")
    

for (let type of map.keys()) {
    console.log(type);
}
for (let pokemon of map.values()) {
    console.log(pokemon);
}
for (let cada of map) {
    
    console.log(cada);
}