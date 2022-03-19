function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (Number(fano.value) > ano) {
                img.setAttribute('src', 'imagens/sperm.png')
            }
            else if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/m-baby.png')  
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/m-adolescent.png')  
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/m-adult.png')  
            } else if (idade > 50 && idade <= 140){
                // idoso
                img.setAttribute('src', 'imagens/m-old.png')  
            } else {
                img.setAttribute('src', 'imagens/dead.png')
            }
        } else {
            genero = 'Mulher'
            if (Number(fano.value) > ano) {
                img.setAttribute('src', 'imagens/sperm.png')
            }
            else if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'imagens/f-baby.png')  
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/f-adolescent.png')  
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'imagens/f-adult.png')  
            } else if (idade > 50 && idade <= 140){
                // idoso
                img.setAttribute('src', 'imagens/f-old.png')  
            } else {
                img.setAttribute('src', 'imagens/dead.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`
        if (idade < 0 || idade > 140) {
            if (idade < 0) {
                res.innerHTML = `<p><strong>Você ainda não nasceu!</strong></p>`
            } else {
                res.innerHTML = `<p><strong>Você já morreu!</strong></p>`
            }
        }
        res.appendChild(img)
    }
}