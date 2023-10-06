document.addEventListener('DOMContentLoaded', function () {
    const listarLink = document.getElementById('listar');
    const adicionarLink = document.getElementById('adicionar');
    const editarLink = document.getElementById('editar');
    const excluirLink = document.getElementById('excluir');
    const conteudoDiv = document.getElementById('conteudo');

    function carregarPagina(pagina) {
        fetch(pagina)
            .then(response => response.text())
            .then(data => {
                conteudoDiv.innerHTML = data;
                
                if (pagina === 'listar_produtos.html') {

                    const Adicionado = Object.values('conteudo')
                    // Simula uma lista de produtos (você pode substituir isso com dados reais do servidor)
                    const produtos = [
                        { id: 1, nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 10.99, quantidade: 100 },
                        { id: 2, nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 20.99, quantidade: 50 },
                        { id: 3, nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 15.99, quantidade: 75 },
                        {Adicionado}

                    ];

                    // Exibe a lista de produtos
                    const listaProdutosDiv = document.getElementById('conteudo');
                    const ul = document.createElement('ul');
                    produtos.forEach(produto => {
                        const li = document.createElement('li');
                        li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Descrição: ${produto.descricao}, Preço: R$ ${produto.preco}, Quantidade: ${produto.quantidade}`;
                        ul.appendChild(li);
                    });
                    listaProdutosDiv.appendChild(ul);
                } else if (pagina === 'editar_produto.html') {
                    // Aqui você pode implementar a lógica para editar um produto
                }
            });
    }

    listarLink.addEventListener('click', function () {
        carregarPagina('listar_produtos.html');
    });

    adicionarLink.addEventListener('click', function () {
        carregarPagina('adicionar_produto.html');
    });

    editarLink.addEventListener('click', function () {
        carregarPagina('editar_produto.html');
    });

    excluirLink.addEventListener('click', function () {
        // Aqui você pode implementar a lógica para excluir um produto
        conteudoDiv.innerHTML = 'Página de Exclusão de Produto';
    });
});
