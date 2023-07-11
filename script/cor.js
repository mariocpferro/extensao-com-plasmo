document.addEventListener('DOMContentLoaded', function(){
    // Obtém o elemento de input pelo ID
    var input = document.getElementById("corInput");

    const mudacor = () => {
        var corSelecionada = input.value;
        document.body.style.background = corSelecionada;
    }
    document.querySelector('#botao').addEventListener('click', async () =>{

        //Pegando a primeira posição do array
        const [tab] = await chrome.tabs.query({ active : true, currentWindow: true});

        chrome.scripting.executeScript({
            target: { tabId: yab.id },
            function: mudaCor,
        });
    });
    

})