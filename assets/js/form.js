let botaoAdicionar = document.querySelector("#adicionar-cliente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    let form = document.querySelector("#form-adiciona");

    let cliente = obtemclienteDoFormulario(form);

    let erros = validacliente(cliente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);

        return;
    }

    adicionaclienteNaTabela(cliente);

    form.reset();

    let mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

    respostaVisual()
});

function obtemclienteDoFormulario(form) {

    let cliente = {
        nome: form.nome.value,
        peso: form.peso.value.replace(",", "."),
        altura: form.altura.value.replace(",", "."),
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value.replace(",", "."), form.altura.value.replace(",", "."))
    }

    return cliente;
}

function montaTr(cliente) {
    let clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montaTd(cliente.nome, "info-nome"));
    clienteTr.appendChild(montaTd(cliente.peso, "info-peso"));
    clienteTr.appendChild(montaTd(cliente.altura, "info-altura"));
    clienteTr.appendChild(montaTd(cliente.gordura, "info-gordura"));
    clienteTr.appendChild(montaTd(cliente.imc, "info-imc"));

    return clienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validacliente(cliente) {

    let erros = [];

    if (cliente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (cliente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (cliente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (cliente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(cliente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(cliente.altura)) {
        erros.push("Altura é inválida (ex: 1,77)");
    }

    return erros;
}

function exibeMensagensDeErro(erros) {
    let ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        let li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function adicionaclienteNaTabela(cliente) {
    let clienteTr = montaTr(cliente);
    let tabela = document.querySelector("#tabela-clientes");
    tabela.appendChild(clienteTr);
}
