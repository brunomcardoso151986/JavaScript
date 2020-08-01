function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if (hora >= 0 && hora <= 12) {
        //BOM DIA!
        img.src = 'manha.png'
        document.body.style.background = '#f3d8a8'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'tarde.png'
        document.body.style.background = '#a66b68'
    } else {
        //BOA NOITE!
        img.src = 'noite.png'
        document.body.style.background = '#291d35'
    }
}
