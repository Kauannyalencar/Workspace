
var a = {x:10, y:20}
var b = Object.create(a)
console.log(b);
b.p = 100;
b.q = 200;

console.log(b);
console.log('b.x:', b.x,    'b.y:', b.y);

