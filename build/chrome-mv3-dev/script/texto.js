document.addEventListener('DOMContentLoaded', function(){

    // Coloca o botão de transformar a frase em maiúscula clicável
    document.querySelector('#botao1').addEventListener('click', function(){

        // Lê o texto inserido
        let text = document.querySelector('#texto').value;

        // Insere a frase transformada no ID result
        document.querySelector('#result').innerHTML = maiusculo(text);

        // Chama a função para aparecer o botão de copiar
        botaoCopia();
    });

    // Coloca o botão de transformar a frase em minúscula clicável
    document.querySelector('#botao2').addEventListener('click', function(){

        // Lê o texto inserido
        let text = document.querySelector('#texto').value;

        // Insere a frase transformada no ID result
        document.querySelector('#result').innerHTML = minusculo(text);

        // Chama a função para aparecer o botão de copiar
        botaoCopia();
    });

    // Função que mostra o botão de copiar
    function botaoCopia(){
        // Deixa o botão aparente
        document.querySelector('#copiar').style.display = 'block';

        // Coloca o botão de copiar a frase clicável
        document.querySelector('#copiar').addEventListener('click', function(){
            copiarTexto();
        });
    }

    // Função que copia o texto transformada
    function copiarTexto() {
        // Obtém o elemento da div que contém o texto pelo seu ID
        var divTexto = document.getElementById("result");

        // Cria um elemento de input temporário
        var inputTemporario = document.createElement("input");

        // Define o valor do input como o texto da div
        inputTemporario.value = divTexto.innerText;

        // Adiciona o elemento de input temporário ao corpo da página
        document.body.appendChild(inputTemporario);

        // Seleciona o conteúdo do input
        inputTemporario.select();

        // Copia o conteúdo selecionado para a área de transferência
        document.execCommand("copy");

        // Remove o elemento de input temporário da página
        document.body.removeChild(inputTemporario);
    }

    // Transformar em maiúsculo
    function maiusculo(text){
        return text.toUpperCase();
    }

    // Transformar em minúsculo
    function minusculo(text){
        return text.toLowerCase();
    }
})