// comentário"//"
// Dica da Ballerine 
// Portugues = Para cada (for) dado dentro da lista de dados (let var) 
// Javascript = for (let dado of dados) 
// += é uma forma abreviada de realizar uma operação de adição e atribuição simultaneamente. Em outras palavras, ele adiciona um valor a uma variável existente e, em seguida, atribui o resultado dessa adição à mesma variável. (Incremento, concatenação)

function pesquisar() {

    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "Nenhuma meta definida"
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para concatenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // Se titulo includes campoPesquisa
        if (
            titulo.includes(campoPesquisa) || 
            descricao.includes(campoPesquisa) || 
            tags.includes(campoPesquisa)
        ) {

            // Cria um novo elemento
            resultados +=
        `       <div class="item-resultado">
        
                    <h2>
                        <a href="#" target="_blank">
                            ${dado.titulo}
                        <a>                 
                    </h2>
        
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
        
                    <a href=${dado.link} target="_blank">
                        Ver mais...
                    </a>
        
                </div>  `
        };

    };

    if (!resultados) {
        resultados = "Nenhuma meta definida"
    }

    // Atribui o HTML gerado para a seção de resultados    
    section.innerHTML = resultados

};