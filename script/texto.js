document.addEventListener('DOMContentLoaded', function(){

    document.querySelector('#botao1').addEventListener('click', function(){
        let text = document.querySelector('#texto').value;

        document.querySelector('#result').innerHTML = maiusculo(text);
        alteracoesCopia();
    });
    document.querySelector('#botao2').addEventListener('click', function(){
        let text = document.querySelector('#texto').value;

        document.querySelector('#result').innerHTML = minusculo(text);
        alteracoesCopia();
    });

    function alteracoesCopia(){
        document.querySelector('#copiar').style.display = 'block';
        document.querySelector('#copiar').addEventListener('click', function(){
            copiarTexto();
        });
    }

    function copiarTexto() {
        // Obtém o elemento da div pelo seu ID
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

    function maiusculo(text){
        return text.toUpperCase();
    }
    function minusculo(text){
        return text.toLowerCase();
    }
})