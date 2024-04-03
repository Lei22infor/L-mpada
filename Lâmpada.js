const turnon = document.getElementById ('turnon')
const turnoff = document.getElementById ('turnoff')
const L = document.getElementById ('L')

function LOn (){
    L.src= 'Aceso.png'
}
function LOf (){
    L.src='Apagado.png'
}
turnon.addEventListener('click', LOn)
turnoff.addEventListener('click', LOf)
L.addEventListener('mouseover', LOn)
L.addEventListener('mouseleave', LOf)
