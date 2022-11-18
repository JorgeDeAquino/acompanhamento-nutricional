let btnAddClientes = document.querySelector("#buscar-clientes");

btnAddClientes.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load", function() {
        let erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            let resposta = xhr.responseText;
            let clientes = JSON.parse(resposta);

            clientes.forEach(function(cliente) {
                adicionaclienteNaTabela(cliente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
