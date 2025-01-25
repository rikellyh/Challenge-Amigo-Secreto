let lista = document.querySelector("#listaAmigos");
let nomeAmigo = document.querySelector("#amigo"); 

let arrayAmigos = [];

function adicionarAmigo () {
  let nomeDigitado = nomeAmigo.value.trim();

  if (nomeDigitado === "") {
    alert("Por favor, insira um nome.");
    return;
  };

  arrayAmigos.push(nomeDigitado);
  nomeAmigo.value = "";
  lista.innerHTML = "";

  let contadorAmigo = 0;

  arrayAmigos.forEach((amigo) => {
    let amigoAdicionado = document.createElement("li");

    amigoAdicionado.textContent = amigo;
    amigoAdicionado.id = "id-" + contadorAmigo++;

    lista.appendChild(amigoAdicionado);
  });
}

function sortearAmigo () {
  let resultado = document.querySelector("#resultado");
  let totalAmigos = arrayAmigos.length;

  resultado.innerHTML = "";

  if (totalAmigos < 2) {
    alert("Precisa ter pelo menos dois amigos para realizar o sorteio");
    return;
  } 

  let randomId = Math.floor(Math.random * totalAmigos);
  let sortearAmigo = [...arrayAmigos];
  sortearAmigo.splice(randomId, 1);

  let totalAmigosParaSortear = sortearAmigo.length;
  let indiceSorteado = Math.floor(Math.random() * totalAmigosParaSortear);
  let amigoSorteado = sortearAmigo[indiceSorteado];

  let resultadoFinal = document.createElement("li");
  resultadoFinal.innerText = `Resultado: o amigo sorteado foi ${amigoSorteado}`;
  resultado.appendChild(resultadoFinal);
}
