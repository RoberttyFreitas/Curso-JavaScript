var numeros = []

function adicionar(){
    var num = Number(document.getElementById('txtnum').value)
    var seletor = document.getElementById('seletor')
    var res = document.getElementById('res')
    res.innerHTML = ""
    if(num < 1 || num > 100 || numeros.indexOf(num) != -1){
        window.alert("[ERRO] Valor inválido")
    }else{
        var item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        seletor.appendChild(item)
        numeros.push(num)
    }
}

function finalizar(){
    var res = document.getElementById('res')
    
    if(numeros.length == 0){
        window.alert("Nenhum valor adicionado")
    }else{

        var maximo = 1
        var minimo = 100
        var soma = 0

        for (let i = 0; i < numeros.length; i++) {
            if(numeros[i] > maximo){
                maximo = numeros[i]
            }
            if(numeros[i] < minimo){
                minimo = numeros[i]
            }
            soma += numeros[i]
        }
        
        res.innerHTML += `Ao todo, temos ${numeros.length} números cadastrados. <br>`
        res.innerHTML += `O maior valor informado foi ${maximo}. <br>`
        res.innerHTML += `O menor valor informado foi ${minimo}. <br>`
        res.innerHTML += `Somando os valores, temos ${soma}. <br>`
        res.innerHTML += `A média dos valores digitados é ${soma/numeros.length}. <br>`
 
    }   
}