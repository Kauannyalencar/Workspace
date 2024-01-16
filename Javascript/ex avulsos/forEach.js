function func() {
 
    // Original array
    const items = [12, 24, 36];
    const copy = [];
   
    items.forEach(function (item) {
        copy.push(item + item+2);
    });
    console.log(copy);
}
func();
func()