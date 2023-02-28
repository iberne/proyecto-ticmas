document.getElementById('boton-exp1').onclick = function (){
    console.log("mostrar experiencia")
    document.getElementById('descripcion-exp').style.display = 'block'
}
document.getElementById('boton-exp2').onclick = function(){
    console.log('ocultar experiencia')
    document.getElementById('descripcion-exp').style.display = 'none'
}

document.getElementById('boton-hab1').onclick = function (){
    console.log("mostrar habilidades")
    document.getElementById('lista-habilidad').style.display = 'block'
}
document.getElementById('boton-hab2').onclick = function(){
    console.log('ocultar experiencia')
    document.getElementById('lista-habilidad').style.display = 'none'
}
