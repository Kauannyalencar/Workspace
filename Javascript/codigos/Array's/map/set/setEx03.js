let events = new Set();
let event1 = {type: "concert", day:"Saturday"};
let event2 = {type:"book launch", day:"Wednesday"};
let event3 = {type: "meet up", day: "Monday"};
events.add(event1);
events.add(event2);
events.add(event3);
for (const item of events) {
    console.log(item);
}
console.log(events.has(event1));
for(let value of events) {
    console.log(value);
}
