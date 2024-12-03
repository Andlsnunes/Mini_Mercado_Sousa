document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    fetch("produtos.json")
        .then(response => response.json())
        .then(data => {
            const currentPage = window.location.pathname.split("/").pop();
            let products = [];

            if (currentPage === "alimentos.html") {
                products = data.alimentos;
            } else if (currentPage === "frutas-verduras.html") {
                products = data.frutas_verduras;
            } else if (currentPage === "higiene.html") {
                products = data.higiene;
            }

            products.forEach(product => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <img src="${product.imagem}" alt="${product.nome}">
                    <h3>${product.nome}</h3>
                    <p>Preço: R$${product.preco.toFixed(2)}</p>
                    <button class="add-to-cart" onclick="adicionarAoCarrinho(${product.id}, '${product.nome}', ${product.preco}, '${product.imagem}')">Adicionar ao Carrinho</button>
                `;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error("Erro ao carregar os produtos:", error));
});

function voltarInicio() {
    window.location.href = "index.html";
}
