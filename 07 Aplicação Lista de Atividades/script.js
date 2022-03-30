var listaAtividades = [];
var checado = "unchecked";

function addAtividade(){


    var atividade = prompt("Qual é a atividade?");

    document.querySelector('.lista-atividades').innerHTML += `
    
        <div class="lista-atividade-single">
            <input type="checkbox"  `+checado+`  name="atividade_concluida" id="atividade_concluida" class="atividade_concluida">
            <h3 class="nome-atividade">`+atividade+`</h3>
            <h3>Editar</h3>
            <h3>Excluir</h3>
        </div>
    
    `;

    for (var i = 0; i < listaAtividades.length; i++){

        if (listaAtividades[i].marcado === "true"){
            checado = "checked";
        } else {
            checado = "unchecked";
        }
    }

    // Este código se refere ao clique na caixa de marcação dos itens da lista. Caso eu marque um item, ele será "checado" e o item da lista será riscado. Se eu desmarcar, o item da lista será desmarcado. 

    var atividadesConcluida = document.querySelectorAll('input[name=atividade_concluida]');

    for (var i = 0; i < atividadesConcluida.length; i++){
        atividadesConcluida[i].addEventListener('click', function(){
            
            for (var j = 0; j < atividadesConcluida.length; j++){

                if (atividadesConcluida[j].checked){
                    console.log("Há pelo menos um checkbox marcado! -> " + j);

                    document.querySelectorAll('.lista-atividade-single > .nome-atividade')[j].classList.add('tachar-atividade');

                    listaAtividades.push(
                        {
                            id: j,
                            marcado: true
                        }
                    )

                } else {
                    console.log("Há pelo menos um checkbox desmarcado! -> " + j);

                    document.querySelectorAll('.lista-atividade-single > .nome-atividade')[j].classList.remove('tachar-atividade');
                }
            }

        })
    };
}
