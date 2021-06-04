const entradaPrompt = document.getElementById("entradaPrompt");
// alert (entradaPrompt.textContent); // exibir conteudo  de texto da tag
entradaPrompt.textContent = "Clique aqui!";

entradaPrompt.addEventListener(
  "click",
  () => {
    alert("Você clicou no botao!");
    const nome = prompt("Digite seu nome...");
    alert(`Olá ${nome}! \nTudo bem?`);
  },
  false
);

// ""==''==`` isso são formas de declarar uma string
// concatenar (juntar informações)
// \n (usado para quebra de linha)
// SOMAR DOIS NÚMEROS

const btnSomar = document.querySelector("#somarNumeros");
let resSoma = document.querySelector("#resSoma");

const somarNumeros = () => {
  const a = +prompt("Digite o primeiro número");
  const b = +prompt("Digite o segundo número");

  resSoma.textContent = a + b;
};

btnSomar.addEventListener("click", somarNumeros, false);

// + SOMA
// - SUBTRAÇÃO
// * MULTIPLICAÇÃO
// / DIVISÃO
// % RESTO DA DIVISÃO -> 4%2 = 0

// ENTRADA DE DADOS COM FORMULÁRIO HTML

const form = document.forms.registro;
const msgCadastro = document.querySelector("#msgcadastro");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const { nome, sobrenome } = form;
  console.log(nome.value, sobrenome.value);
  msgCadastro.innerHTML = `<small>${nome.value} ${sobrenome.value} cadastro com sucesso</small>`;
});
