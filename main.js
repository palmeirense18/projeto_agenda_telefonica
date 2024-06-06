const form = document.getElementById('formContatos')
const nomes = [];
const numeros = []; 

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputnomeAgenda = document.getElementById('nomeAgenda').value;
    const inputnumero = document.getElementById('numero').value;

    if (nomes.includes(inputnomeAgenda)) {
        alert (`o nome: ${inputnomeAgenda} ja foi inserido`);
    } else {
        nomes.push(inputnomeAgenda)
        numeros.push(inputnumero)

        let linha = '<tr>';
        linha +=`<td>${inputnomeAgenda}</td>`;
        linha += `<td>${inputnumero}</td>`;
        linha += '</tr>';
    
        linhas += linha;

    }

    document.getElementById('nomeAgenda').value = '';
    document.getElementById('numero').value = '';
}

function atualizaTabela() {
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
}