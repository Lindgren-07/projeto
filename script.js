// carrinho.js

// Array para armazenar os produtos no carrinho
const carrinho = [];



let carrinhoDiv = document.getElementById('carrinho');
let carrinhoImg = document.getElementById('carrinho-img');

// Evento de clique na imagem do carrinho
carrinhoImg.addEventListener('click', clicar)
 function clicar(){ 
  if (carrinhoDiv.style.display === 'block') {
    carrinhoDiv.style.display = 'none'; // Oculta o carrinho se estiver visível
  } else {
    carrinhoDiv.style.display = 'block'; // Mostra o carrinho se estiver oculto
  }
};

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
  const produto = { nome, preco };
  carrinho.push(produto);
  atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
  const listaCarrinho = document.getElementById('carrinho-lista');
  const totalElement = document.getElementById('total');
  listaCarrinho.innerHTML = '';
  
  let total = 0;

  carrinho.forEach((produto) => {
    const item = document.createElement('li');
    item.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
    listaCarrinho.appendChild(item);
    total += produto.preco;
  });

  totalElement.innerText = total.toFixed(2);
}

// Evento para adicionar um produto ao carrinho quando o botão "Adicionar ao Carrinho" é clicado
const botoesAdicionar = document.querySelectorAll('.bot-class');
botoesAdicionar.forEach((botao, index) => {
  botao.addEventListener('click', () => {
    const nome = document.querySelectorAll('.txt')[index].textContent;
    const precoStr = document.querySelectorAll('.precoRS')[index].textContent;
    const preco = parseFloat(precoStr.replace('R$', '').trim());
    adicionarAoCarrinho(nome, preco);
  });
});