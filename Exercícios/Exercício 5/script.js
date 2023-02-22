function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res = document.getElementById('res')
    if(passo <= 0 || inicio.lenght == 0 || fim.lenght == 0 || passo.lenght == 0){
        window.alert('[ERRO] Verifique novamente os dados!')
    }else{
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        res.innerHTML = ""
        if(inicio <= fim){
            for(var c = inicio; c <= fim; c += passo){
                res.innerHTML += `${c} &#128073; `
            }
            res.innerHTML += '&#x1F3C1;'
        }else{
            for(var c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} &#128073; `
            }
            res.innerHTML += '&#x1F3C1;'
        }
    }
}