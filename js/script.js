let cart = [];

// Adicionar item ao carrinho
function adicionarAoCarrinho(id, nome, preco, imagem) {
    const itemExistente = cart.find(item => item.id === id);
    if (itemExistente) {
        itemExistente.quantidade += 1;
        itemExistente.subtotal = itemExistente.quantidade * itemExistente.preco;
    } else {
        cart.push({
            id: id,
            nome: nome,
            preco: preco,
            imagem: imagem,
            quantidade: 1,
            subtotal: preco
        });
    }let cart = [];

    // Adicionar item ao carrinho
    function adicionarAoCarrinho(productId, nome, preco, imagem) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantidade += 1;
            existingItem.subtotal = existingItem.quantidade * existingItem.preco;
        } else {
            cart.push({
                id: productId,
                nome: nome,
                preco: preco,
                imagem: imagem,
                quantidade: 1,
                subtotal: preco
            });
        }
        atualizarCarrinho();
    }
    
    // Atualizar exibição do carrinho
    function atualizarCarrinho() {
        const cartContainer = document.getElementById('cart-items');
        const totalDisplay = document.getElementById('cart-total');
    
        if (!cartContainer || !totalDisplay) {
            console.error("Elementos do carrinho não encontrados no DOM.");
            return;
        }
    
        cartContainer.innerHTML = ''; // Limpar carrinho antes de atualizar
        let total = 0;
    
        cart.forEach(item => {
            const itemRow = document.createElement('div');
            itemRow.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-3');
            itemRow.innerHTML = `
                <img src="${item.imagem}" alt="${item.nome}" style="width: 50px; height: 50px; margin-right: 10px;">
                <div>
                    <p class="mb-1"><strong>${item.nome}</strong></p>
                    <p class="mb-0">Quantidade: ${item.quantidade}</p>
                    <p class="mb-0">Subtotal: R$${item.subtotal.toFixed(2)}</p>
                </div>
            `;
            cartContainer.appendChild(itemRow);
            total += item.subtotal;
        });
    
        totalDisplay.innerText = `Total: R$${total.toFixed(2)}`;
    }
    
    // Finalizar compra
    function finalizarCompra() {
        if (cart.length === 0) {
            alert('Seu carrinho está vazio!');
            return;
        }
        alert('Compra finalizada com sucesso! Obrigado por comprar conosco.');
        cart = []; // Limpar carrinho após finalizar compra
        atualizarCarrinho();
    }
    
    // Voltar para a página inicial
    function voltarInicio() {
        window.location.href = 'index.html';
    }
    
    atualizarCarrinho();
}

// Atualizar exibição do carrinho
function atualizarCarrinho() {
    const cartContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');

    // Verifica se os elementos do carrinho existem no DOM
    if (!cartContainer || !totalDisplay) {
        console.error("Elementos do carrinho não encontrados no DOM.");
        return;
    }

    cartContainer.innerHTML = ''; // Limpa a exibição do carrinho
    let total = 0;

    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.classList.add('cart-item', 'd-flex', 'align-items-center', 'mb-3', 'border', 'p-2', 'rounded');
        itemRow.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}" class="me-3" style="width: 50px; height: 50px;">
            <div class="flex-grow-1">
                <p class="mb-1 fw-bold">${item.nome}</p>
                <p class="mb-1">Quantidade: ${item.quantidade}</p>
                <p class="mb-1">Subtotal: R$${item.subtotal.toFixed(2)}</p>
            </div>
        `;
        cartContainer.appendChild(itemRow);
        total += item.subtotal;
    });

    totalDisplay.innerText = `Total: R$${total.toFixed(2)}`;
}

// Finalizar compra
function finalizarCompra() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra finalizada com sucesso!');
    cart = []; // Limpar carrinho
    atualizarCarrinho();
}

// Botão de voltar para o início
function voltarInicio() {
    window.location.href = 'index.html';
}



// Processa o formulário de agendamento
document.getElementById("form-agendamento")?.addEventListener("submit", function (e) {
    e.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById("nome-agendamento").value;
    const tipoServico = document.getElementById("tipo-servico").value;
    const dataHora = document.getElementById("data-hora").value;
    const observacoes = document.getElementById("observacoes").value;

    // Armazena os dados no LocalStorage
    const agendamentos = JSON.parse(localStorage.getItem("agendamentos")) || [];
    agendamentos.push({ nome, tipoServico, dataHora, observacoes });
    localStorage.setItem("agendamentos", JSON.stringify(agendamentos));

    // Confirmação de sucesso
    alert(`Agendamento realizado com sucesso!\nNome: ${nome}\nServiço: ${tipoServico}\nData e Hora: ${dataHora}`);
    window.location.href = "index.html";
});

