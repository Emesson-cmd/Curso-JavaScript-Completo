// Sobre promises

// Nesta função é chamada a Promise, que resolve ou rejeita uma solicitação dependendo se houver ou não um erro. Caso haja um erro, a promise será rejeitada, caso não haja erro, a promise será solucionada.
// Com a opção de setTimeOut eu posso fazer com que minha função demore a ser executada.
function testes(){
     return new Promise(function(resolve, reject){
        setTimeout(function(){
            const erro = false;

            if (erro){
                reject(alert('Erro...'));
            } else {
                resolve("A promisse foi resolvida com sucesso!")
            }
        }, 10000)
     })
}

// Neste caso, quando utilizo "then", executarei a função se testes tiver ocorrido tudo bem (resolve). Se tiver ocorrido "reject" não executará a função após then.
// Caso tenha um erro, entrará no "catch", onde o erro será tratado.

/*testes().then(function(res){
    alert(res);
}).catch(function(err){
    alert(err);
})
*/


// Sobre funções assincronas e await

// Basicamente com o asyc e await é posível executar uma funçao só depois que outra é executada. Dinifir uma ordem específica;
async function testes2(){
    alert("chamando...");
    await testes();
    alert("funcionou");
}

testes2();

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 3000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();
