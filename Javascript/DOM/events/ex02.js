const buttons = document.querySelectorAll("button");

buttons.forEach((button) =>{
    button.addEventListener('click', () => {
        alert(button.id);
    })
})

//.forEach 
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert(button.id);
  
    });
  });