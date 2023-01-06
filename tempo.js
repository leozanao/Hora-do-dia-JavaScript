function carregar() {
    var dia = document.getElementById('dia')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    dia.innerHTML = `Agora são ${hora} horas.`
    if (hora>=0 && hora<12){
        img.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor='#E2C5A3'
    }else if (hora>12 && hora<19) {
        img.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor='#DC8260'
    }else{
        img.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor='#251F1F'
    }
}