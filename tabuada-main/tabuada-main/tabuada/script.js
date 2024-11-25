const numero = document.querySelector("#numeroUsuario")
const btnTabuada = document.querySelector("#btnTabuada")
const resultado = document.querySelector("#res")
 
function resultadoCalculadora() {
    resultado.innerHTML = "" /* limpar */
    var numeroConvertido = Number(numero.value)
    var inicial = 1 /* valor inicial */
    while(inicial <= 10){/* teste */
        resultado.innerHTML += `<p>${numeroConvertido} x ${inicial} = ${numeroConvertido * inicial}<p>`

        inicial++/* incremento */
    }


}
btnTabuada.addEventListener("click", resultadoCalculadora)
