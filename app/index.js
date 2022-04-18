var dados = []

$(function () {
    //executa ao carregar a tela
    dados = JSON.parse(localStorage.getItem("__dados__"))

    if(dados) {
        populaCatalogoProdutor()
    }
})

function populaCatalogoProdutor() {
    if(Array.isArray(dados)) {

        $("#catalogoProd tbody").html("")
         
        dados.forEach(function (produto) {
            //template string
            $("#catalogoProd tbody").append(`<tr>
                <th>${produto.ID}</th>
                <td>${produto.nome}</td>
                <td>${produto.descricao}</td>
                <td>${produto.preco}</td>
                <td>${produto.ID}</td>
            </tr>`)
        })

        $("#btnSalvarProd").click(function() {
            console.log('meu pinto');
            //Evento click do botão salvar produto
            let Nome = $("#nomeProd").val()
            let Preco = $("#precoProd").val()
            let Descricao = $("#descProd").val()

            let registo = {}

            registo.nome = Nome
            registro.preco = Preco
            registro.descricao = Descricao

            registro.ID = dados.length + 1;
        })
    }
}



