const switcher = document.querySelector('.btn');

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')

    const className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }
    console.log('current class name:' + className);
});