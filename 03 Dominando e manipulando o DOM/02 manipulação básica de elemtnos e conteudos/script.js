var p = document.getElementsByTagName("p");

// Retorna a quantidade de elementos existente na página que sejam tag do tipo p 

// o p que está retornando é um objeto. Se é um objeto, isso significa que eu posso acessar algumas propriedade desse objeto.

//alert(p.length);

// Retorna o que está dentro da tag
//alert(p[1].innerHTML);

for (var i = 0; i < p.length; i++){
    p[i].innerHTML = "Manipulado via JS - " + i;
}