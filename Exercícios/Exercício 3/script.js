function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano').value
    var res = window.document.getElementById('res')
    var genero = 'Homem'

    if(fano.length == 0 || Number(fano) > ano){
        window.alert("[ERRO] Verifique os dados novamente")
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'img/crianca_homem.png')
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', 'img/adulto_homem.png')
            }else{
                img.setAttribute('src', 'img/idoso_homem.png')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 18){
                img.setAttribute('src', 'img/crianca_mulher.png')
            }else if(idade >= 18 && idade < 60){
                img.setAttribute('src', 'img/adulto_mulher.png')
            }else{
                img.setAttribute('src', 'img/idoso_mulher.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

