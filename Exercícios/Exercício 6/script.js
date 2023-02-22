function tabuada(){
    var num = document.getElementById('num')
    var tabuada = document.getElementById('tabuada')
    var n = Number(num.value)
    tabuada.innerHTML = ""

    for(var i = 1; i <= 10; i++){
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${n * i}`
        tabuada.appendChild(item)
    }
}