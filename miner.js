let Script = setInterval(Script, 1000);

function Script() {
    let head = document.querySelector('head');
    if (head) {
        clearInterval(Script);
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://raw.githubusercontent.com/SardinhaCN/StormGain-AutoMiner/main/miner.js";
        document.querySelector('head').appendChild(script);
    }
}