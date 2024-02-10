let userCodeName = new Map();

let user1 = {name: 'Loyd'}, user2 = {name: 'Murray'}, user3 = {name: 'Jane'};

userCodeName.set(user1, "Codename: Twilight").set(user2, 2).set(user3, 3);

// Method 1

for (let [name, id] of userCodeName) {
  console.log(name);
  console.log(id);
}


// Method 2

// userIDs.forEach((name, id) => {
//     console.log(name);
//     console.log(id);
//   });