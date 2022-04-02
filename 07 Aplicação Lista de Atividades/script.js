var listaAtividades = [];
var checado = "unchecked";

// Ao clicar no botão "Adicionar nova atividades", esse comando será ativado
function addAtividade(){
    // Busca o elemento lista-atividades no DOM
    paiAtividades = document.querySelector('.lista-atividades');

    filhoAtividade = document.querySelectorAll('.lista-atividade-single');

    // Abre caixa de diálogo para o usuário inserir a atividade quer será adicionada na lista
    var atividade = prompt("Qual é a atividade?");

    // Está adicionando uma nova atividades à lista de atividades de acordo com o que o usuário escreveu na caixa de diálogo.
    paiAtividades.innerHTML += `
    
        <div class="lista-atividade-single">
            <input type="checkbox"  `+checado+`  name="atividade_concluida" id="atividade_concluida" class="atividade_concluida">
            <h3 class="nome-atividade">`+atividade+`</h3>
            <h3>Editar</h3>
            <h3>Excluir</h3>
        </div>
    
    `;

    // Este código pecorre sobre todo o array (listaAtividades) e atribui ao elemento "checado" o valor "checked" e "unchecked" de acordo com o elemento "marcado" (true ou false)
    /*for (var i = 0; i < listaAtividades.length; i++){
        if (listaAtividades[i].marcado === "true"){
            checado = "checked";
        } else {
            checado = "unchecked";
        }
    }*/

    // Este código se refere ao clique na caixa de marcação dos itens da lista. Caso eu marque um item, ele será "checado" e o item da lista será riscado. Se eu desmarcar, o item da lista será desmarcado. 
    var atividadesConcluida = document.querySelectorAll('input[name=atividade_concluida]');
    for (var i = 0; i < atividadesConcluida.length; i++){
        atividadesConcluida[i].addEventListener('click', function(){
            
            for (var j = 0; j < atividadesConcluida.length; j++){

                if (atividadesConcluida[j].checked){
                    document.querySelectorAll('.lista-atividade-single > .nome-atividade')[j].classList.add('tachar-atividade');

                    listaAtividades.push(
                        {
                            id: j,
                            marcado: true
                        }
                    )
                } else {
                    document.querySelectorAll('.lista-atividade-single > .nome-atividade')[j].classList.remove('tachar-atividade');
                }
            }

        })
    };

    // Ao adicionar um novo item na lista de atividades, esse elemento receberá um atributo chamado itemId. Esse atributo será utilizado para excluir esse elemento futuramente.
    //var qtdeFilhos = paiAtividades.childElementCount;
    // filhoAtividade[length].setAttribute("idnex");
}

// Função somente para testes
function teste(){
    // Verifica o elemento childElementCount
    /*let listaDeAtividades = document.querySelector(".lista-atividades");

    let qtdeFilhos = listaDeAtividades.childElementCount;

    alert(qtdeFilhos)*/

    // Verifica se o atributo index foi adicionado ao elemento
}
