//Convertendo array em set 

let arr = [4, 65, 98, 3];

let convertido = [ ...new Set(arr)];
convertido.push(58)
console.log(convertido);


let users = ["John", "Murray", "Jane", "Jane", "Anne"];

function unique(users) {
        return Array.from(new Set(users));
}

console.log(unique(users));

// Method 2

let set = new Set(users);
let arrFromSet = [...set];
arrFromSet.push("Leon")
console.log(arrFromSet);