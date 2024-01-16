function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   
   console.log(dia);
    msg.innerHTML = `Agora são ${hora} horas do ${dia}`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png.jpg'
        document.body.style.background = '#deb887'
    } else if (hora >= 12 && hora < 18) {
        console.log('BOA TARDE!')
        img.src = 'tarde.png.jpg'
        document.body.style.background = '#b95629'
    } else {
        console.log('BOA NOITE')
        img.src = 'noite.png.jpg'
        document.body.style.background = '#333153'
    }
}

