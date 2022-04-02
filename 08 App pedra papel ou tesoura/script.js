var elementos = document.querySelectorAll('.player-options div > img');
var elementosEnemy = document.querySelectorAll('.enemy-options div > img');
var playerOpt = "";
var enemyOpt = "";

function validarVitoria(){
    var vencedor = document.querySelector('.vencedor');
    
    if(playerOpt == "rock"){
        if (enemyOpt == "rock"){
            vencedor.innerHTML = "Empate";
        } else if (enemyOpt == "paper"){
            vencedor.innerHTML = "Inimigo ganhou";
        } else if (enemyOpt == "scisor"){
            vencedor.innerHTML = "Inimigo perdeu";
        } 
    }

    if(playerOpt == "paper"){
        if (enemyOpt == "rock"){
            vencedor.innerHTML = "Inimigo perdeu";
        } else if (enemyOpt == "paper"){
            vencedor.innerHTML = "Empate";
        } else if (enemyOpt == "scisor"){
            vencedor.innerHTML = "Inimigo ganhou";
        } 
    }

    if(playerOpt == "scisor"){
        if (enemyOpt == "rock"){
            vencedor.innerHTML = "Inimigo ganhou";
        } else if (enemyOpt == "paper"){
            vencedor.innerHTML = "Inimigo perdeu";
        } else if (enemyOpt == "scisor"){
            vencedor.innerHTML = "Empate";
        } 
    }
}

function resetOpacityPlayer(){
    for (var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

function resetOpacityEnemy(){
    for (var i = 0; i < elementosEnemy.length; i++){
        elementosEnemy[i].style.opacity = 0.3;
    }
}

function inimigoJoga(){
    resetOpacityEnemy();
    
    // Math.random() -> Numero decimal entre 0 e 1
    // Math.floor() -> Remove valor flutuante
    let rand = Math.floor(Math.random()*3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');

    for (var i = 0; i < enemyOptions.length; i++){
        if (i == rand){
            enemyOptions[i].childNodes[0].style.opacity = 1;
            enemyOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
}

for (var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJoga();

        validarVitoria();
    })
}