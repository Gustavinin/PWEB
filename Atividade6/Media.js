function onCalculate() {
    let nome, nota1, nota2, nota3, nota4;

    nome = prompt("Insira o nome: ");
    nota1 = Number(prompt("Nota 1: "));
    nota2 = Number(prompt("Nota 2: "));
    nota3 = Number(prompt("Nota 3: "));
    nota4 = Number(prompt("Nota 4: "));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        alert("Insira números válidos e tente novamente!!")
    } else {
        let media = (nota1 + nota2 + nota3 + nota4) / 4
        alert(`Média do aluno ${nome}: ` + media.toFixed(1));
    }
}