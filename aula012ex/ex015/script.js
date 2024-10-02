function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/hbebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/hadol.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/hjovem.png')
            } else {
                img.setAttribute('src', 'imagens/hvelho.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/mbebe.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/madol.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mjovem.png')
            } else {
                img.setAttribute('src', 'imagens/mvelha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}