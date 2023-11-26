const host = window.location.href

const list = [
  {
    title: 'Aulas',
    items: [
      {
        title: 'AJAX',
        link: '00%20arquivos%20da%20aula/ajax/ajax/',
      },
      {
        title: 'Variaveis',
        link: '01%20aulas/aula02-variaveis.html',
      },
      {
        title: 'Arrays',
        link: '01%20aulas/aula03-arrays.html',
      },
      {
        title: 'Condicoes',
        link: '01%20aulas/aula04-condicoes.html',
      },
      {
        title: 'Laços de repetiçao for while',
        link: '01%20aulas/aula05-laços-de-repetição-for-while.html',
      },
      {
        title: 'For each',
        link: '01%20aulas/aula06-forEach-como-usar.html',
      },
      {
        title: 'Exercicios do curso',
        items: [
          {
            title: 'Prompt',
            link: '01%20aulas/exercicios-do-curso/exercicio01-prompt.html',
          },
          {
            title: 'Calcular idade',
            link: '01%20aulas/exercicios-do-curso/exercicio02-calcular-idade.html',
          },
          {
            title: 'Calculadora',
            link: '01%20aulas/exercicios-do-curso/exercicio03-calculadora.html',
          },
        ],
      },
      {
        title: 'Exercicios pessoais',
        items: [
          {
            title: 'Calcular média notas',
            link: '01%20aulas/exercicios-pessoais/exercicio01-calcular-media-notas.html',
          },
          {
            title: 'Calcular quadrado do número',
            link: '01%20aulas/exercicios-pessoais/exercicio02-quadrado-do-numero.html',
          },
        ],
      },
    ],
  },
  {
    title: 'Modulo de orientação a objeto',
    items: [
      {
        title: 'Objetos',
        link: '02%20modulo-oo-js/01-objetos.html',
      },
      {
        title: 'Funções e instâncias',
        link: '02%20modulo-oo-js/02-funções-e-instâncias.html',
      },
      {
        title: 'Classes',
        link: '02%20modulo-oo-js/03-classes.html',
      },
      {
        title: 'Trabalhando com datas',
        link: '02%20modulo-oo-js/04-trabalhando-com-datas.html',
      },
    ],
  },
  {
    title: 'Dominando e manipulando o DOM',
    items: [
      {
        title: 'O que é o DOM?',
        link: '03 Dominando e manipulando o DOM/01 - O que é o DOM/index.html',
      },
      {
        title: 'Manipulação básica',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/02%20manipulação%20básica%20de%20elemtnos%20e%20conteudos/index.html',
      },
      {
        title: 'Usando o ID',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/03%20manipular%20atraves%20do%20ID/index.html',
      },
      {
        title: 'Usando as classes',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/04%20manipular%20atraves%20da%20classe/index.html',
      },
      {
        title: 'Query select all',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/05%20querySelectorAll/index.html',
      },
      {
        title: 'Animação com JavaScript',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/06%20animações%20com%20JavaScript/index.html',
      },
      {
        title: 'Mais animação com JavaScript',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/07%20mais%20sobre%20animações%20com%20JavaScript%20copy/index.html',
      },
      {
        title: 'Slide com VanillaJS',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/08%20Exercício%20-%20Criando%20slider%20com%20vanilla%20JS/index.html',
      },
      {
        title: 'Slide com VanillaJS 2',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/08-2%20Exercício%20-%20Criando%20slider%20com%20vanilla%20JS%20copy/index.html',
      },
      {
        title: 'Slide com VanillaJS 3',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/08-3%20Exercício%20-%20Criando%20slider%20com%20vanilla%20JS/index.html',
      },
      {
        title: 'Funcionário recente e mais antigo',
        link: '03%20Dominando%20e%20manipulando%20o%20DOM/09%20Exercício%20-%20funcionario%20mais%20recente%20e%20mais%20antig0/index.html',
      },
    ],
  },
  {
    title: 'JavaScript moderno',
    items: [
      {
        title: 'Template string',
        link: '04%20JavaScript%20Moderno/01%20Template%20strings/index.html',
      },
      {
        title: 'Block scopes',
        link: '04%20JavaScript%20Moderno/02%20Block%20scopes/index.html',
      },
      {
        title: 'Arrow functions',
        link: '04%20JavaScript%20Moderno/03%20Arrow%20functions/index.html',
      },
      {
        title: 'Destructure',
        link: '04%20JavaScript%20Moderno/04%20Destructure/index.html',
      },
      {
        title: 'Rest e spread',
        link: '04%20JavaScript%20Moderno/05%20Rest%20e%20soread/index.html',
      },
      {
        title: 'Promisses, async e await',
        link: '04%20JavaScript%20Moderno/06%20Promisses,%20Async%20e%20await/index.html',
      },
    ],
  },
  {
    title: 'AJAX Asynchronous JavaScript and XML',
    items: [
      {
        title: ' AJAX Tradicional',
        link: '05%20AJAX%20Asynchronous%20JavaScript%20and%20XML/01%20AJAX%20Tradicional/index.html',
      },
      {
        title: ' Requisição com FETCH',
        link: '05%20AJAX%20Asynchronous%20JavaScript%20and%20XML/02%20Requisição%20com%20FETCH/index.html',
      },
      {
        title: ' Exercício  Lista de Filmes',
        link: '05%20AJAX%20Asynchronous%20JavaScript%20and%20XML/03%20Exercício%20-%20Lista%20de%20Filmes/index.html',
      },
    ],
  },
  {
    title: 'Projetos',
    items: [
      {
        title: ' Aplicação Lista de Supermercado',
        link: '06%20Aplicação%20Lista%20de%20Supermercado/index.html',
      },
      {
        title: ' Aplicação Lista de Atividades',
        link: '07%20Aplicação%20Lista%20de%20Atividades/index.html',
      },
      {
        title: ' App pedra papel ou tesoura',
        link: '08%20App%20pedra%20papel%20ou%20tesoura/index.html',
      },
      {
        title: ' Criando Pokedex',
        link: '09%20Criando%20Pokedex/index.html',
      },
      {
        title: ' Loading Animation',
        link: '10%20Loading%20Animation/index.html',
      },
    ],
  },
];

function verifyItens(module, _space) {
  var tempList = '';

  module.items.forEach((content) => {
    if (content?.items?.length > 0) {
      tempList += verifyItens(content, 2);
      return;
    }

    tempList += `<li style="margin-left: 1rem;">
                    <a href="${host}${content.link}">${content.title}</a>
                </li>`;
  });

  return `<div style="margin-left: ${_space}rem;">
            <h3>${module.title}</h3>
            ${tempList}
        </div>
    `;
}

function fillList() {

  const listEl = document.getElementById('list');
  var tempList = '';

  list.forEach((item) => {
    tempList += verifyItens(item);
  });

  listEl.innerHTML = tempList;
}

fillList();
