// comentário"//"
// Dica da Ballerine 
// Portugues = Para cada (for) dado dentro da lista de dados (let var) 
// Javascript = for (let dado of dados) 
// += é uma forma abreviada de realizar uma operação de adição e atribuição simultaneamente. Em outras palavras, ele adiciona um valor a uma variável existente e, em seguida, atribui o resultado dessa adição à mesma variável. (Incremento, concatenação)

function pesquisar() {

    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    // Inicializa uma string vazia para concatenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada dado no array 'dados'
    for (let dado of dados) {
        resultados +=
`           <div class="item-resultado">

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

// Atribui o HTML gerado para a seção de resultados    
section.innerHTML = resultados
};