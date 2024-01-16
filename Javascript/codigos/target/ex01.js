// const ul = document.createElement("ul")
// document.body.appendChild(ul)

// const li1 = document.createElement("li")
// const li2 = document.createElement("li")

// ul.appendChild(li1)
// ul.appendChild(li2)

const ul = document.querySelector("ul")

function hide() {
    // evt.target refere-se ao elemento no click <li>
  // This is different than evt.currentTarget, which would refer to the parent <ul> in this context
  event.target.style.visibility = "hidden"
  // event.currentTarget.style.visibility = "hidden"
}
ul.addEventListener("click", hide, false)
console.log(ul);