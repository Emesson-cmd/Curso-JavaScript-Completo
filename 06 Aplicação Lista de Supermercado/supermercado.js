var items = [];
var nomeProduto = document.querySelector('input[name=nome_produto]');
var valorProduto = document.querySelector('input[name=valor_produto]');

document.querySelector('input[type=submit]').addEventListener('click', function(){

    if (nomeProduto.value == "" || valorProduto.value == 0){
        alert('Preencha todos os campos!');
    } else {
        items.push({
            nome: nomeProduto.value,
            preco: valorProduto.value
        })

        document.querySelector('.lista-produtos').innerHTML += `
        
        <div class="lista-produto-single">
            <h3>`+ items[items.length - 1].nome +`</h3>
            <h3 class="produto-price"><span>R$ `+ parseFloat(items[items.length - 1].preco).toFixed(2) +`</span></h3>
            <button onclick="excluir()" class="excluir"><span>Excluir</span></button>
        </div>
        
        `;
        
        var total = 0;

        for (var i = 0; i < items.length; i++){
            total += Number.parseFloat(items[i].preco);
        }

        //Esta função é como se fosse o loop de for para recuperar cada valor que existe no array especificado. 
        /*
        items.map(function(val){

        });
        */

        // Função para arredondar casas decimais no javascript.
        // Estou dizendo que o "total" terá somente 2 casas decimais.
        total = total.toFixed(2); 
        document.querySelector('.soma-produto > h1').innerHTML = ` 
        
        Total: R$ `+ total +`

        `;

        nomeProduto.value = "";
        valorProduto.value = 0;
    }

});

document.querySelector('.limpar').addEventListener('click', function(){
    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto > h1').innerHTML = ` 
        Total: R$ `+ 0,00 +`
    `;

    nomeProduto.value = "";
    valorProduto.value = 0;
    items = [];
    alert("Lista limpada com sucesso!");
});


function excluir(){
    var els = document.querySelectorAll('.excluirPai');
    
    for(var i = 0; i < els.length; i++){
        els[i].addEventListener('click', (t)=>{
            var listaProdutos = document.querySelector('.lista-produtos');
            var singleProduto = listaProdutos.querySelectorAll('.lista-produto-single');
            //listaProdutos.removeChild(singleProduto[0]);  
            t.target.style.backgroundColor = "green"; 
            var a = t.target.getAttribute('style');
            if (a = "background-color: green;"){
                alert("É verde");
                t.target.classList.add('.borda-doida');
            }
            var seraoExcluidos = document.querySelectorAll('.borda-doida');
            for (var i = 0; i < singleProduto.length; i++){
                alert(singleProduto[0].classList.contains('.borda-doida'));
            }
        })
    }

    /*var listaProdutos = document.querySelector('.lista-produtos');
    var singleProduto = listaProdutos.querySelectorAll('.lista-produto-single');
    //listaProdutos.removeChild(singleProduto[0]); 
    var bdC = singleProduto[0].querySelector('.excluir').style.getBackgroundColor;
    alert(bdC);*/

    /*for(var i = 0; i < singleProduto.length; i++){
        botao = singleProduto[i].querySelector('.excluir');
        if ( === )
    }*/


}
/*
colocar todo o texto num array.
usar for ou map para dispor todos os elementos no documento
quando eu clicar num botão, identificar a posição dele no array e remover este elemento do array, dessa forma será removido também do documento
*/