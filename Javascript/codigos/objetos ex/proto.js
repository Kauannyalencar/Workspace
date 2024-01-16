const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype)
  carl.greet(); // Cria o personPrototype, que tem o método greet(). Usa object.create para criar novo objeto com personPrototype como seu prototipo. Chama greet() no novo objeto.
  
console.log(Object.hasOwn(personPrototype, "greet"))
