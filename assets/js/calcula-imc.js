let clientes = document.querySelectorAll(".cliente");

for (let i = 0; i < clientes.length; i++) {

    let cliente = clientes[i];

    let tdPeso = cliente.querySelector(".info-peso");
    let peso = tdPeso.textContent;

    let tdAltura = cliente.querySelector(".info-altura");
    let altura = tdAltura.textContent;

    let tdImc = cliente.querySelector(".info-imc");

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    if (!pesoEhValido) {
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        cliente.classList.add("cliente-invalido");
    }

    if (!alturaEhValida) {
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        cliente.classList.add("cliente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso, altura) {
    let imc = 0;
    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso) {

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}
