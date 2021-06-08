const inputDate = document.querySelector("#inputDate");
const resIdade = document.querySelector("#resIdade");
const calcularidade = () => {
  const anoAtual = new Date().getFullYear();
  const anoNascimento = new Date(inputDate.value).getFullYear();

  if (isNaN(anoNascimento)) {
    return (resIdade.innerHTML = "");
  }

  const idade = anoAtual - anoNascimento;

  const plural = idade <= 1 ? "ano" : "anos";
  // if else ternário

  let content = `<h3>Sua idade é de: ${idade} ${plural}.</h3>`;

  if (idade < 18) {
    content = content + `<h3>Você é menor de idade!</h3>`;
  } else if (idade >= 60) {
    content = content + `<h3>Você está na melhor idade!</h3>`;
  } else {
    content = content + `<h3> Você é maior de idade!`;
  }
  resIdade.innerHTML = content;
};

inputDate.addEventListener("change", calcularidade, false);

// Usando Switch-case

const selectBairro = document.querySelector("#selectBairro");
const valorTaxa = document.querySelector("#ValorTaxa");

const calcularTaxa = () => {
  const bairro = selectBairro.value;

  if (!bairro) return (valorTaxa.innerHTML = "");

  switch (bairro) {
    case "cruzDasAlmas":
      valorTaxa.innerHTML = `Taxa de entrega é de R$8,00.`;
      break;
    case `farol`:
    case `mangabeiras`:
      valorTaxa.innerHTML = `Taxa de entrega é de R$5,00`;
      break;
    default:
      valorTaxa.innerHTML = `Taxa de entrega é de R$15,00`;
      break;
  }
};

selectBairro.addEventListener(`change`, calcularTaxa, false);
