document.getElementById("concluir").addEventListener("click", function(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var mensageBox = document.getElementById("mensage");

    var nome1 = nomeInput.value;
    var senha1 = senhaInput.value;

    if (nome === "Messi" && senha === "gold") {
        mensagenBox.textContent = "Cadastro aceito";
    }
    else {
        mensagenBox.textContent = "Cadastro invalido";
    }

    nomeInput.value = "";
    senhaInput.value = "";
});
