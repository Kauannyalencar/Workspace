const container = document.querySelector('.container')

const p = document.createElement('p')
p.textContent = "Hey i'm red!"
p.setAttribute('style', 'color:red;')

const h3 = document.createElement('h3')
h3.textContent = "I'm a blue h3"
h3.style.color = 'grey'
const div = document.createElement('div');
const h1 = document.createElement('h1')
const paragrafoDiv = document.createElement('p')

div.classList.add("Div2")

 h1.textContent = "i'm in a div"
 paragrafoDiv.textContent = "ME TOO!"
div.setAttribute("style", "border: 1px solid black; background-color:pink; padding:25px;")
div.appendChild(h1)
div.appendChild(paragrafoDiv)


container.appendChild(p)
container.appendChild(h3)
container.appendChild(div)
