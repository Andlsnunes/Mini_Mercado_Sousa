// Array para armazenar os itens do carrinho
let carrinho = [];

// Adicionar item ao carrinho
function adicionarAoCarrinho(id, nome, preco, imagem) {
    const itemExistente = carrinho.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.quantidade += 1;
        itemExistente.subtotal = itemExistente.quantidade * itemExistente.preco;
    } else {
        carrinho.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1,
            subtotal: preco
        });
    }
    alert(`${nome} foi adicionado ao carrinho com sucesso!`);
    atualizarCarrinho();
}

// Atualizar exibição do carrinho
function atualizarCarrinho() {
    const containerCarrinho = document.getElementById('itens-carrinho');
    const totalCarrinho = document.getElementById('total-carrinho');
    containerCarrinho.innerHTML = ''; // Limpar conteúdo atual
    let total = 0;

    carrinho.forEach(item => {
        const linhaItem = `
            <tr>
                <td><img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px;"></td>
                <td>${item.nome}</td>
                <td>${item.quantidade}</td>
                <td>R$${item.preco.toFixed(2)}</td>
                <td>R$${item.subtotal.toFixed(2)}</td>
            </tr>
        `;
        containerCarrinho.innerHTML += linhaItem;
        total += item.subtotal;
    });

    totalCarrinho.innerText = `Total: R$${total.toFixed(2)}`;
}

// Redirecionar para a página inicial
function voltarInicio() {
    window.location.href = 'index.html';
}

// Finalizar compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra finalizada com sucesso!');
    carrinho = [];
    atualizarCarrinho();
}
