const animal = document.querySelector('#animal')
const btn = document.querySelector('button');
const body = document.querySelector("form");

btn.addEventListener("click", () => {
  body.textContent = `${animal.value} is a good animal`
})