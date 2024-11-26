# Mini Mercado Sousa

Este projeto é um sistema web simples e funcional para gerenciamento de produtos e compras de um mini mercado. Ele inclui páginas para diferentes categorias de produtos, carrinho de compras e cadastro de clientes. Além disso, possui funcionalidades interativas como adicionar produtos ao carrinho, exibição de totais e simulação de login e cadastro.

---

## **Funcionalidades**

### **1. Navegação**
- **Páginas disponíveis**:
  - Página inicial (`index.html`): Apresentação do mercado.
  - Alimentos (`alimentos.html`): Lista de produtos alimentícios.
  - Frutas e Verduras (`frutas-verduras.html`): Lista de frutas e vegetais.
  - Higiene (`higiene.html`): Produtos de higiene pessoal e limpeza.
  - Serviços (`servicos.html`): Serviços oferecidos pelo mercado.
  - Carrinho (`carrinho.html`): Visualização e controle do carrinho de compras.
  - Cadastro (`cadastro.html`): Cadastro de clientes com simulação de login.

### **2. Carrinho de Compras**
- Adição de produtos ao carrinho diretamente das páginas de produtos.
- Exibição de:
  - Miniaturas das imagens dos produtos.
  - Nome, quantidade e preço subtotal de cada item.
  - Valor total da compra.
- Possibilidade de aumentar ou diminuir a quantidade de itens no carrinho.

### **3. Cadastro e Login**
- Formulário de cadastro de novos clientes.
- Simulação de login para usuários registrados.
- Botão de voltar à página inicial.

### **4. Responsividade**
- Interface adaptada para dispositivos móveis, tablets e desktops.

---

## **Estrutura do Projeto**

### **Páginas HTML**
- **`index.html`**: Página inicial com carrossel de imagens e links para categorias.
- **`alimentos.html`**: Produtos alimentícios.
- **`frutas-verduras.html`**: Frutas e verduras.
- **`higiene.html`**: Produtos de higiene.
- **`servicos.html`**: Descrição dos serviços do mercado.
- **`carrinho.html`**: Carrinho de compras com todos os itens adicionados.
- **`cadastro.html`**: Cadastro e login de clientes.

### **Estilos**
- **`style.css`**: Folha de estilo principal com cores, layout e responsividade.

### **Scripts**
- **`script.js`**: JavaScript para gerenciamento do carrinho de compras, navegação, e interatividade.

### **Dados**
- **`produtos.json`**: Lista de produtos com nome, preço e imagem para cada categoria.

---

## **Tecnologias Utilizadas**
- **HTML5**: Estrutura e conteúdo das páginas.
- **CSS3**: Design e responsividade.
- **JavaScript**: Lógica e interatividade.
- **JSON**: Gerenciamento de dados de produtos.
- **Bootstrap 5**: Estilização e componentes responsivos.

---

## **Como Utilizar o Projeto**
1. Faça o download ou clone o repositório.
   ```bash
   git clone <URL_DO_REPOSITORIO>
