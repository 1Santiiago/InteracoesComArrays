// selecione cada curso e retorne um array com objeto contendo os detalhes do curso

// const cursos = document.querySelectorAll('.curso')

// // Agora recebemos uma nodeList e devemos transformar em array para poder trabalhar

// const arrayCursos = Array.from(cursos)

// // agora, devemos retorna um array com os objetos

// const objetoCurso = arrayCursos.map((curso)=>{
//    // pegando o titulo
//    const titulo = curso.querySelector('h1').innerText
//    const descricao = curso.querySelector('p').innerText
//    const aulas = curso.querySelector ('.aulas').innerText
//    const horas = curso.querySelector('.horas').innerText
//     return {
//         titulo,
//         descricao,
//         aulas,
//         horas
//     }
// })

// console.log(objetoCurso)

// Retorne uma lista com os numeros maiores que 100

const numbers = [79, 211, 434, 66, 77, 85, 33, 6, 67, 101, 65, 29];

const maiorQ100 = numbers.filter((numero) => numero > 100);

console.log(maiorQ100);

// verifique se baixo faz parte da lista de instrumentos e retorne true

const instrumentos = ["guitarra", "bateria", "baixo", "violao"];

const baixo = instrumentos.some((e) => {
  return e === "baixo";
});

console.log(baixo);

// retorne o valor total das compras

const compras = [
  {
    item: "Banana",
    valor: 57
  },

  {
    item: "Manga",
    valor: 67
  },

  {
    item: "Biscoito",
    valor: 43
  },

  {
    item: "Coca cola",
    valor: 10
  }
];

const valores = compras.map((valor) => {
  return valor.valor;
});

const somaDosValores = valores.reduce((acc, cur) => {
  return acc + cur;
});

console.log(somaDosValores);

//  o mesmo exercicio acima, sendo um pouco mais co0mplexo

const compras1 = [
  {
    item: "Banana",
    valor: "R$ 7,00"
  },

  {
    item: "Manga",
    valor: "R$ 59,00"
  },

  {
    item: "Biscoito",
    valor: "R$ 522,00"
  },

  {
    item: "Coca cola",
    valor: "R$ 5,00"
  }
];

const valorTotal = compras1.reduce((acc, item) => {
  const valorLImpo = +item.valor.replace("R$", "").replace(",", ".");
  return acc + valorLImpo;
}, 0);

console.log(valorTotal);
