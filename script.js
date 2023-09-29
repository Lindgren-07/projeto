

// Array para armazenar os produtos no carrinho
const carrinho = [];


let listaCarrinho = document.getElementById('carrinho-lista')
let totalReal = document.getElementById('total')
let body = document.getElementsByTagName("body")[0]
let carrinhoDiv = document.getElementById('carrinho')
let carrinhoImg = document.getElementById('carrinho-img')
let botLimpar = document.getElementById("limparCarrinho")


body.addEventListener("dblclick", sair)
function sair(){
  if(carrinhoDiv.style.display == "block"){
    carrinhoDiv.style.display = "none"
  }
}


carrinhoImg.addEventListener('click', sairCar)
function sairCar(){
  if(carrinhoDiv.style.display == "block"){
    carrinhoDiv.style.display = "none"
  }
  else{
    carrinhoDiv.style.display = "block"
  }
}

function mostrarCarrinho() {
  carrinhoDiv.style.display = 'block';
}




// adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  atualizarCarrinho();
}
// atualiza a exibição do carrinho
function atualizarCarrinho() {
  
  listaCarrinho.innerHTML = '';
  
  let total = 0;

    for(let i = 0; i <  carrinho.length; i++){
    let produto = carrinho[i]
    let item = document.createElement('li')
    item.innerHTML = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`
    listaCarrinho.appendChild(item)
    total += produto.preco
  }

  totalReal.innerHTML = total.toFixed(2)
}




//adicionar atraves do click
const botoesAdicionar = document.querySelectorAll('.bot-class')

for (let i = 0; i < botoesAdicionar.length; i++) {
  let botao = botoesAdicionar[i]
  botao.addEventListener('click', adicionar)
  function adicionar(){ 
    let nome = document.querySelectorAll('.txt')[i].innerHTML
    let precoStr = document.querySelectorAll('.precoRS')[i].innerHTML
    let preco = parseFloat(precoStr.replace('R$', ''))
    
    adicionarAoCarrinho(nome, preco)
    mostrarCarrinho()
  }
}

botLimpar.addEventListener("click", limpar)
function limpar(){
  
  carrinho.length = 0
  atualizarCarrinho()
}

/*let barraPesquisa = document.getElementById("txt-barra-pesquisa").value
let listaSugestoes = document.getElementById("lista-sugestoes")
barraPesquisa.addEventListener("keyup",acionar)
function acionar(){
  let termoSugestao = barraPesquisa.value.toLowerCase()
  let listaUl = document.getElementsByClassName("barra-pesquisa")
  for(let i = 0; i < listaUl.length; i++){
    if(!listaUl[i].innerHTML.toLowerCase().includes(termoSugestao)){
      listaUl[i].style.display = "none"

    }
    else{
      listaUl[i].style.display = "list-item"
    }
  }
}*/



let barraPesquisa = document.getElementById("txt-barra-pesquisa");
let listaSugestoes = document.getElementById("lista-sugestoes");

barraPesquisa.addEventListener("input", acionar);

function acionar() {
  let termoSugestao = barraPesquisa.value.toLowerCase();
  let listaUl = document.getElementsByClassName("barra-pesquisa");
  for (let i = 0; i < listaUl.length; i++) {
    if (!listaUl[i].innerHTML.toLowerCase().includes(termoSugestao)) {
      listaUl[i].style.display = "none";
    } else {
      listaUl[i].style.display = "list-item";
    }
  }
}

/*let barraPesquisa = document.getElementById("txt-barra-pesquisa");
let listaSugestoes = document.getElementById("lista-sugestoes");

barraPesquisa.addEventListener("input", acionar);

function acionar() {
  let termoSugestao = barraPesquisa.value.toLowerCase();
  let listaUl = document.getElementsByClassName("barra-pesquisa");
  let sugestoes = listaSugestoes.getElementsByTagName("li");

  for (let i = 0; i < listaUl.length; i++) {
    if (!listaUl[i].innerHTML.toLowerCase().includes(termoSugestao)) {
      sugestoes[i].style.display = "none";
    } else {
      sugestoes[i].style.display = "list-item";
    }
  }

  if (termoSugestao === "") {
    listaSugestoes.style.display = "none";
  } else {
    listaSugestoes.style.display = "block";
  }
}*/
