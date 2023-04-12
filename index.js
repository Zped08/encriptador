function desencriptarTexto() {
    const textinput = document.getElementById('input').value
    const desencriptar_Texto = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    }
    const valueInput = textinput.replace(/(ai|enter|imes|ober|ufat)/g, match => desencriptar_Texto[match])
    let textoDesencriptado = document.getElementById('text-area')
    textoDesencriptado.value = valueInput
}

function encriptarTexto() {
    const textinput = document.getElementById('input').value
    const encriptarTexto = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    }
    const valueInput = textinput.replace(/[aeiou]/g, match => encriptarTexto[match])
    let textoEncriptado = document.getElementById('text-area')
    textoEncriptado.value = valueInput

}

function copy() {
    let copyText = document.querySelector("textarea");
    copyText.select();
    document.execCommand("copy");
}

document.getElementById("copy").addEventListener("click", copy);
