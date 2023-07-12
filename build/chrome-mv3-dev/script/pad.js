document.addEventListener('DOMContentLoaded', function(){
    // Obtém o elemento textarea pelo seu ID
    var textarea = document.getElementById("blocoNotas");

    // Adiciona um evento para salvar o conteúdo quando houver alterações
    textarea.addEventListener("input", function() {
        // Obtém o conteúdo digitado no textarea
        var conteudo = textarea.value;

        // Salva o conteúdo em localStorage(armazenamento local)
        localStorage.setItem("blocoNotas", conteudo);
    });

    // Verifica se há um conteúdo salvo em localStorage(armazenamento local)
    if (localStorage.getItem("blocoNotas")) {
        // Se houver, preenche o textarea com o conteúdo salvo
        textarea.value = localStorage.getItem("blocoNotas");
    }
})