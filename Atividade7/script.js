function selectJKP(selection) {
    document.getElementById('jokenpoText').innerText = "1...2...3...e...";
    document.getElementById('suaEscolha').innerText = "";
    document.getElementById('escolhaCPU').innerText = "";
    document.getElementById('resultado').innerText = "";
    setTimeout(() => {
        jokenpoText = "Jo"
        document.getElementById('jokenpoText').innerText = jokenpoText;
    }, 1000)
    setTimeout(() => {
        jokenpoText = "Ken"
        document.getElementById('jokenpoText').innerText = jokenpoText;
    }, 2000)
    setTimeout(() => {
        jokenpoText = "Pô!!!"
        document.getElementById('jokenpoText').innerText = jokenpoText;
        let cpuJKPChoose = getRandomJKP();
        switch (selection) {
            case "pedra":
                if (cpuJKPChoose == "pedra")
                    gameResult = "Empate!"
                if (cpuJKPChoose == "papel")
                    gameResult = "Perdeu!"
                if (cpuJKPChoose == "tesoura")
                    gameResult = "Ganhou!"
                break;
            case "papel":
                if (cpuJKPChoose == "pedra")
                    gameResult = "Ganhou!"
                if (cpuJKPChoose == "papel")
                    gameResult = "Empate!"
                if (cpuJKPChoose == "tesoura")
                    gameResult = "Perdeu!"
                break;
            case "tesoura":
                if (cpuJKPChoose == "pedra")
                    gameResult = "Perdeu!"
                if (cpuJKPChoose == "papel")
                    gameResult = "Ganhou!"
                if (cpuJKPChoose == "tesoura")
                    gameResult = "Empate!"
                break;
        }
        document.getElementById('suaEscolha').innerText = "Você: " + selection;
        document.getElementById('escolhaCPU').innerText = "CPU: " + cpuJKPChoose;
        document.getElementById('resultado').innerText = gameResult;
    }, 3000)
}

function getRandomJKP() {
    let selectedJKP;
    let randomNumber = Math.random();
    if (randomNumber < 0.333)
        selectedJKP = "pedra";
    else if (randomNumber < 0.666)
        selectedJKP = "papel";
    else
        selectedJKP = "tesoura";
    return selectedJKP;
}