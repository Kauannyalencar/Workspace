let list = document.querySelector("ul");
let input = document.querySelector("input");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    const item = input.value;
    input.value = "";

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const btnList = document.createElement('button');

    listItem.appendChild(listText)
    listText.textContent = item;
    listItem.appendChild(btnList);
    btnList.textContent = "Delete"
    list.appendChild(listItem);

    btnList.addEventListener("click", () => {
        list.removeChild(listItem)
    });
    input.focus();
});
