var lastIndex = 0; // Nesta linha definimos o último índece, ou seja, quem atualmente está selecionado no carrosel

var images = document.querySelectorAll('.container img'); // a variável images "pega" todas as imagens do carrosel e as armazena num array, que em seguida será manipulado para deixar oculto e invisível

/* Nesta função forEach, 3 parâmetros estão sendo chamados: 
- o valor do elemento: nesse caso, pode ser qualquer palavra válida (usei BlaBlaBlaBla)
- o índice do elemento: o index, 0, 1 e 2 (3 elementos no total)
- o array que está sendo percorrido: nesse caso, uma função que ao clicar na bullet, faz a "transição da imagem" e da bullet "selecionada"

O valor de index será adicionado quando houver o click
*/
images.forEach((BlaBlaBlaBla, index)=>{
    document.querySelectorAll('.bullet-single')[index] 
    .addEventListener('click',()=>{
        let lastImage = document.querySelectorAll('.container img')[lastIndex]; // A lastImagem é a imagem na qual será ocultada para permitir que a actualImage seja vizualizada
        let actualImage = document.querySelectorAll('.container img')[index]; // esse index corresponde a posição clicada nas bullets. É coletado na hora do click

        // Resetar as bullets e setar a nova com base na imagem.

        document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet'); // Faz a transição das bullets. Remove a bullet ativa

        document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet'); // Faz a transição das bullets. Adiciona a bullet ativa

        lastImage.style.opacity = 0; // Faz a transição das imagens
        actualImage.style.opacity = 1;  // Faz a transição das imagens

        lastIndex = index; // Faz com que o índice atual seja o ultimo indece para que quando eu clique novamente essa definição de "quem é atual e ultima" seja redefinida
    })
})