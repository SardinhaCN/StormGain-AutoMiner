let install,
    saqueTimer,
    btn,
    saqueBooleana,
    saqueButton,
    buttonStart,
    buttonStop,
    vimeo,
    tempo,
    button,
    swit = 'off',
    config = {
      html: `
      <h1 class="text-2xl leading-tight font-bold mt-0">Bitcoin Cloud Minerβ</h1>
      <div class="container">
        <div id="miner" class="toggle-button" onclick="this.classList.toggle('active')">
          <div class="inner-circle">
          </div>
        </div>
      </div>`
    };

install = setInterval(installSistem, 11000);

// codígo de instalação do Sistema do AutoMiner. 
function installSistem() {
    console.clear();
    htmlButton = document.querySelector("#region-main > div > div:nth-child(2) > div.py-10 > div:nth-child(1) > div");
    if (htmlButton) {
        console.log('Sistema do AutoMiner Instalado.')
        clearInterval(install);

        saqueTimer = setInterval(saque, 5000);

        //Aqui ele esta instalando o html do Switch-liga/desliga no site.
        document.querySelector("#region-main > div > div:nth-child(2) > div.py-10 > div:nth-child(1) > div").innerHTML = config.html;

        //Aqui ele esta escutando o Switch-liga/desliga.
        document.getElementById("miner").addEventListener("click", miner);

        function miner() {
            if (swit === 'off') {
                swit = 'on';
                btn = setInterval(Button, 1000);
                console.log('Start Miner');
            } else {
                swit = 'off';
                clearInterval(btn);
                clearInterval(buttonStart);
                clearInterval(buttonStop);
                console.log('Stop Miner');
            }
        }
    }
}

function Button() {
    if (saqueBooleana = 'false') { //A variavel "saqueBooleana", Ela é responsavel por escolher a hora certa de sacar ou minerar
        //Aqui ele inicia o sistema de mineração.
        let ativarButton = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > button > div > div.text-17.md-text-18.md-font-bold.leading-18');
        if (ativarButton) {
            clearInterval(btn);
            console.log('Preparando o Minerador.');
            ativarButton.click(); //Evitua o click no button de mineração.
            buttonStart = setInterval(start, 1000);
            saqueTimer = setInterval(saque, 1000);
        }

        //Aqui ele detecta que o sistema esta trabalhando.
        let vericaTime = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > div.mb-1.text-15.md-text-18.leading-20.md-leading-28.md-font-bold.md-text-center > span:nth-child(1)');
        if (vericaTime) {
            clearInterval(btn);
            buttonStop = setInterval(Stop, 1000);
            console.log('O Minerador já esta Trabalhando.');
        }
    } else {
        clearInterval(btn);
        clearInterval(saqueTimer);
        saqueButton = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.env > div > div > div.mt-3.pt-3.text-center.border-0.border-t.border-solid.md-border-0.border-gray-1.border-opacity-10 > button');
        console.log(`Evetuando o Saque. Valor: ${saqueMoney[0]}.${saqueMoney[1]}`);
        saqueButton.click(); //Evitua o click no button de saque.
        btn = setInterval(Button, 5000);
        saqueTimer = setInterval(saque, 5000);
    }
}

//Essa fução é responsavel por sacar os $10.00.
function saque() {
    let saqueValor = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.env > div > div > div:nth-child(2) > div.text-gray-1.text-13.md-text-15.leading-4.md-leading-24.text-center > span:nth-child(1)');
    let saqueMoney = saqueValor.outerText.split('≈');
    if (`${saqueMoney[0]}.${saqueMoney[1]}` === '10.00') { //Detecta se esta na hora de evetuar o saque.
        return saqueMoney, saqueBooleana = 'true';
    } else {
        return saqueBooleana = 'false';
    }
}

//Essa fução é responsavel por Iniciar o Tempo de Mineração.
function start() {
    let vericaTime = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > div.mb-1.text-15.md-text-18.leading-20.md-leading-28.md-font-bold.md-text-center > span:nth-child(1)');
    if (vericaTime) {
        let tempo = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > div.mb-1.text-15.md-text-18.leading-20.md-leading-28.md-font-bold.md-text-center > span:nth-child(2)');
        if (tempo.outerText === '03:59:58') {
            clearInterval(buttonStart);
            buttonStop = setInterval(Stop, 1000);
            console.log('Minerador Operando.');
        }
    }
}

//Essa fução é responsavel por Reiniciar o Tempo de Mineração.
function Stop() {
    let vericaTime = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > div.mb-1.text-15.md-text-18.leading-20.md-leading-28.md-font-bold.md-text-center > span:nth-child(1)');
    if (vericaTime) {
        let tempo = document.querySelector('#region-main > div > div:nth-child(2) > div.py-10 > div.mb-8 > div > div.mb-1.text-15.md-text-18.leading-20.md-leading-28.md-font-bold.md-text-center > span:nth-child(2)');
        if (tempo.outerText === '00:00:01') {
            clearInterval(buttonStop);
            btn = setInterval(Button, 10000);
            console.log('Buscando o Botão');
        }
    }
}