function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var atual = new Date()
var hora = atual.getHours()
var minutos = atual.getMinutes()
var ano = atual.getFullYear()
msg.innerHTML = `o ano é ${ano}. :)<br> são exatamente ${hora} horas e ${minutos} minutos.`

if(hora >= 0 && hora < 12){
    img.src = 'morning.png'
    document.body.style.background = '#FFFFFF'
} else if (hora >= 12 && hora < 18){
    img.src = 'afternoon.png'
    document.body.style.background = '#7F7F7F'
}else{
    img.src = 'night.png'
    document.body.style.background = '#000000'
}
}
