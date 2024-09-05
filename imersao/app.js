// comentário"//"

let section = document.getElementById("resultados-pesquisa")
console.log(section);

// Dica da Ballerine
// Portugues = Para cada (for) dado dentro da lista de dados (let var)
// Javascript = for (let dado of dados)

for (let dado of dados) {
// += é uma forma abreviada de realizar uma operação de adição e atribuição simultaneamente. Em outras palavras, ele adiciona um valor a uma variável existente e, em seguida, atribui o resultado dessa adição à mesma variável. (Incremento, concatenação)
// 
    section.innerHTML += `
        <div class="item-resultado">

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

    </div>
`
}

// Voltar a partir da Aula 4 - 25:21 min

