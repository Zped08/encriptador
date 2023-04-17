/* function mostrarTexto(){
    let y = document.getElementById('text-area')
    let x = document.getElementById('muñeco')
    if (x.value.trim() === '') {
      y.classList.remove = 'ocultar-imagen';
    } else {
      y.classList.add = 'ocultar-imagen';
    }
}
 */
function desencriptarTexto() {
    const textinput = document.getElementById('input-textarea').value
    const desencriptar_Texto = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
    const valueInput = textinput.replace(/(ai|enter|imes|ober|ufat)/g, match => desencriptar_Texto[match])
    const textoDesencriptado = document.getElementById('text-area')
    textoDesencriptado.value = valueInput
    const imagen = document.getElementById('muñeco'); 
    imagen.style.display = 'none';
    const mensaje = document.getElementById('mensaje'); 
    mensaje.style.display = 'none';
}

function encriptarTexto() {
    const textinput = document.getElementById('input-textarea').value
    const encriptarTexto = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    const valueInput = textinput.replace(/[aeiou]/g, match => encriptarTexto[match])
    const textoEncriptado = document.getElementById('text-area')
    textoEncriptado.value = valueInput
    const imagen = document.getElementById('muñeco'); 
    imagen.style.display = 'none';
    const mensaje = document.getElementById('mensaje'); 
    mensaje.style.display = 'none';
}



function copy() {
    let copyText = document.getElementById("text-area");
    copyText.select();
    document.execCommand("copy");
}

document.getElementById("copy").addEventListener("click", copy);
