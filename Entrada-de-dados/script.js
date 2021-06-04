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
