let inputFilter = document.querySelector("#filtro-tabela");

inputFilter.addEventListener("input", function () {
    console.log(this.value);
    let clientes = document.querySelectorAll(".cliente");

    if (this.value.length > 0) {
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            let tdNome = cliente.querySelector(".info-nome");
            let nome = tdNome.textContent;
            let re = new RegExp(this.value,"i")
            if (!re.test(nome)) {
                cliente.classList.add("invisivel")
            } else {
                cliente.classList.remove("invisivel")
            }
        }
    } else {
        for (let i = 0; i < clientes.length; i++) {
            let cliente = clientes[i];
            cliente.classList.remove("invisivel")
        }

    }
})