const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")
 
function resultadoCalculadora() {
    resultado.innerHTML = ""
    var numeroConvertido = Number(numero.value)
    var inicial = 1
    while(inicial <= 10){
        resultado.innerHTML += `<p>${numeroConvertido} x ${inicial} = ${numeroConvertido * inicial}<p>`

        inicial++
    }


}
btnTabuada.addEventListener("click", resultadoCalculadora)
