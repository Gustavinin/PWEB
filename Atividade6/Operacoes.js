 function onCalculate() {
    let num1, num2;

    num1 = Number(prompt('Insira o primeiro número: '));
    num2 = Number(prompt('Insira o segundo número: '));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Insira números válidos!!")
    } else {
        alert('Soma: ' + (num1+num2));
        alert('Subtração do primeiro pelo segundo: ' + (num1-num2));
        alert('Produto: ' + (num1*num2));
        alert('Divisão do primeiro pelo segundo: ' + (num1/num2).toFixed(2));
        alert('Resto da divisão do primeiro pelo segundo: ' + (num1%num2));
    }
}