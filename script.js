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

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 2) {
                //Bebê
                img.setAttribute('src', 'homem_bebe.png')
            } else if (idade >= 2 && idade < 10) {
                //Criança
                img.setAttribute('src', 'homem_crianca.png')
            } else if (idade >= 10 && idade < 18) {
                //Adolescente
                img.setAttribute('src', 'homem_adolescente.png')
            } else if (idade >= 18 && idade < 65) {
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem_idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 2) {
                //Bebê
                img.setAttribute('src', 'mulher_bebe.png')
            } else if (idade >= 2 && idade < 10) {
                //Criança
                img.setAttribute('src', 'mulher_crianca.png')
            } else if (idade >= 10 && idade < 18) {
                //Adolescente
                img.setAttribute('src', 'mulher_adolescente.png')
            } else if (idade >= 18 && idade < 65) {
                //Adulta
                img.setAttribute('src', 'mulher_adulta.png')
            } else {
                //Idosa
                img.setAttribute('src', 'mulher_idosa.png')
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
