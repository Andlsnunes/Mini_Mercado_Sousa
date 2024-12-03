// Inicializar carrinho
let cart = [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(id, nome, preco, imagem) {
    const produtoExistente = cart.find(item => item.id === id);
    if (produtoExistente) {
        produtoExistente.quantidade++;
        produtoExistente.subtotal = produtoExistente.quantidade * produtoExistente.preco;
    } else {
        cart.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1,
            subtotal: preco
        });
    }
    atualizarCarrinho();
}

// Função para atualizar a exibição do carrinho
function atualizarCarrinho() {
    const carrinhoElement = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    if (!carrinhoElement || !totalElement) {
        console.error('Elementos do carrinho não encontrados.');
        return;
    }

    carrinhoElement.innerHTML = ''; // Limpar carrinho
    let total = 0;

    cart.forEach(item => {
        total += item.subtotal;

        const itemHTML = `
            <div class="cart-item d-flex align-items-center border-bottom py-2">
                <img src="${item.imagem}" alt="${item.nome}" class="img-thumbnail me-3" style="width: 50px;">
                <div>
                    <p><strong>${item.nome}</strong></p>
                    <p>Quantidade: ${item.quantidade}</p>
                    <p>Subtotal: R$${item.subtotal.toFixed(2)}</p>
                </div>
            </div>`;
        carrinhoElement.innerHTML += itemHTML;
    });

    totalElement.innerHTML = `<h4>Total: R$${total.toFixed(2)}</h4>`;
}

// Função para finalizar compra
function finalizarCompra() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra finalizada com sucesso!');
    cart = []; // Limpar carrinho
    atualizarCarrinho();
}

// Função para voltar ao início
function voltarInicio() {
    window.location.href = 'index.html';
}

// Atribuir eventos de clique para botões de adicionar
document.addEventListener('DOMContentLoaded', () => {
    const botoesAdicionar = document.querySelectorAll('.add-to-cart');
    botoesAdicionar.forEach(botao => {
        botao.addEventListener('click', () => {
            const id = parseInt(botao.dataset.id);
            const nome = botao.dataset.nome;
            const preco = parseFloat(botao.dataset.preco);
            const imagem = botao.dataset.imagem;

            adicionarAoCarrinho(id, nome, preco, imagem);
        });
    });
});
