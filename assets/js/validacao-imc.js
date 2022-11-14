
function respostaVisual() {

    let imcInfo = document.getElementsByClassName("info-imc")

    //transformando html colection em array
    let imcVisual = [...imcInfo];

    imcVisual.forEach((item) => {
        if (item.textContent >= 0 && item.textContent <= 18.4) {
            item.classList.add("alerta");
        } else if (item.textContent >= 18.5 && item.textContent <= 24.9) {
            item.classList.add("bom");
        } else if (item.textContent >= 25 && item.textContent <= 29.9) {
            item.classList.add("alerta");
        } else if (item.textContent >= 30 && item.textContent <= 39.9) {
            item.classList.add("obesidade");
        } else if (item.textContent >= 40 && item.textContent <= 99) {
            item.classList.add("obesidade__grave");
        }
    })

}    