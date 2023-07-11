document.addEventListener('DOMContentLoaded', function(){
    "use strict"

    var hh = 0; //Horas
    var mm = 0; //Minutos
    var ss = 0; //Segundos
    
    var tempo = 1000; // Quantos milésimos valem um segundo
    var cron;
    
    // Função para começar o cronômetro
    function comecar() {
        cron = setInterval(() => { timer(); }, tempo);
    }
    
    // Função para pausar o cronômetro
    function pausar() {
        clearInterval(cron);
    }
    
    // Função para parar o cronômetro
    function parar() {
        clearInterval(cron);
        hh = 0;
        mm = 0;
        ss = 0;
    
        document.getElementById('contador').innerText = '00:00:00';
        // Limpar o estado do cronômetro armazenado
        localStorage.removeItem('estadoCronometro');
    }
    
    // Função para validar o tempo no cronômetro
    function timer() {
        ss++; // Acrescenta +1 segundo
        
        // Quando chegar em 59s, zera os segundos e acrescenta +1 nos minutos
        if (ss == 60) {
            ss = 0;
            mm++;
            // Quando chegar em 59m, zera os minutos e acrescenta +1 nas horas
            if (mm == 60) {
                mm = 0;
                hh++;
            }
        }
        
        // Formatação do tempo
        var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
        
        // Mostra o tempo já formatado
        document.getElementById('contador').innerText = format;

        // Armazenar o estado do cronômetro
        localStorage.setItem('estadoCronometro', JSON.stringify({ hh, mm, ss }));
    
        return format;
    }

    // Recuperar o estado do cronômetro ao carregar a página
    var estadoCronometro = localStorage.getItem('estadoCronometro');
    if (estadoCronometro) {
        var estado = JSON.parse(estadoCronometro);
        hh = estado.hh;
        mm = estado.mm;
        ss = estado.ss;
        timer();
    }
    
    // Ao clicar no botão iniciar, chama a função comecar do cronômetro
    document.getElementById('comecar').addEventListener('click', function(){
        comecar();
    });

    // Ao clicar no botão pausar, chama a função pausar do cronômetro
    document.getElementById('pausar').addEventListener('click', function(){
        pausar();
    });

    // Ao clicar no botão parar, chama a função parar do cronômetro
    document.getElementById('parar').addEventListener('click', function(){
        parar();
    });
});
