const idadeSpan = document.getElementById("idade");

const aniversario = new Date('2007-10-18');
const hoje = new Date();

let idade = hoje.getFullYear() - aniversario.getFullYear();

const mesAtual = hoje.getMonth();
const diaAtual = hoje.getDate();
const mesNascimento = aniversario.getMonth();
const diaNascimento = aniversario.getDate();

if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
}

idadeSpan.textContent = idade;