var elementos = document.querySelectorAll('.player-options div > img');

var playerOpt = "";

//alert(elementos.length)

function resetOpacityPlayer(){
    for (var i = 0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}

for (var i = 0; i < elementos.length; i++){
    elementos[i].addEventListener('click', function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');
    })
}

var elementosEnemy = document.querySelectorAll('.enemy-options div > img');

var enemyOpt = "";

function resetOpacityEnemy(){
    for (var i = 0; i < elementosEnemy.length; i++){
        elementosEnemy[i].style.opacity = 0.3;
    }
}

for (var i = 0; i < elementosEnemy.length; i++){
    elementosEnemy[i].addEventListener('click', function(t){
        resetOpacityEnemy();
        t.target.style.opacity = 1;
        enemyOpt = t.target.getAttribute('opt');
    })
}