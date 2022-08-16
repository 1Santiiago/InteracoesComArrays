// // // exemplo do mundo rael

// // // const Dom = {
// // //     seletor: 'li',
// // //     element(){
// // //         return document.querySelector(this.seletor)
// // //     },

// // //     ativar(){
// // //         const docSelecionado = this.element()
// // //         docSelecionado.classList.add('ativo')

// // //     }

// // // }

// // // Dom.seletor ='ul'
// // // Dom.ativar()

// // //mesmo feito acima, mas em funcao construtora

// // function Dom(seletor) {
// //     this.element = function() {
// //       return document.querySelector(seletor);
// //     }
// //     this.ativar = function(classe) {
// //       this.element().classList.add(classe);
// //     }
// //   }

// //   const li = new Dom('li');
// //   const ul = new Dom('ul');

// //   const lastlI = new Dom('li:last-child')
// //   lastlI.ativar('ativo')

//   //exercicios
//  // Transforme o objeto abaixo em uma Constructor Function

// const pessoa = {
//     nome: 'Nome pessoa',
//     idade: 0,
//     andar() {
//     console.log(this.nome + ' andou');
//     }
//     }
//     // Crie 3 pessoas, João - 20 anos,
//     // Maria - 25 anos, Bruno - 15 anos

//     function Pessoa(nome, idade){
//         this.nome = nome,
//         this.idade = idade
//         this.andar = function(){
//             console.log(`${this.nome} andou`)
//         }

//     }

//     const joao = new Pessoa('Joao', '20 anos')
//     console.log(joao.andar())

//     /// Crie uma Constructor Function (Dom) para manipulação
// // de listas de elementos do dom. Deve conter as seguintes
// // propriedades e métodos:
// //
// // elements, retorna NodeList com os elementos selecionados
// // addClass(classe), adiciona a classe a todos os elementos
// // removeClass(classe), remove a classe a todos os elementos

// function Dom(seletor){
//     this.elementLists = document.querySelectorAll(seletor)
//     this.elements = telementLists
//     this.addClass = function(classe){
//         this.elementLists.forEach((e)=>{
//             e.classList.add(classe)
//         })
//     }
// }

// const listItem = new Dom('li')

// const pais = "Brasil"

// const cidade = new String('Rio')

// console.log(String.prototype)

// const carro = {
//     marca:'ford', preco:1000
// }

// console.log(carro.preco.toFixed(2 ))

// function Pessoa(nome, sobrenome, idade){
//     this.nome = nome, this.sobrenome = sobrenome, this.idade = idade
// }

// Pessoa.prototype.falarTudo = function(){
//     return `Meu nome completo é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos`
// }

// const san = new Pessoa('San', 'fereira', 27)
// console.log(san.falarTudo())

// Exercicios sobbre strings

// 1 - Utilizando o forEach na array abaixo, some os valores de taxa e os valores de recebimentos

const transaçoes = [
  {
    descricao: "Taxa do pão",
    valor: "R$ 129",
  },

  {
    descricao: "Taxa de mercado",
    valor: "R$ 129",
  },

  {
    descricao:'Taxa de banco',
    valor: 'R$ 129'
  },

  {
    descricao: "Recebimento do cliente",
    valor: "R$ 99",
  },

  {
    descricao:'Recebimento de cliente',
    valor:'R$ 89'
  }
]


// transaçoes.forEach((item)=>{
//   console.log(item.valor)
// })

let apenasTaxa = 0
let recebimentoTotal = 0
transaçoes.forEach((i)=>{
  const numeroLimpo = +i.valor.replace('R$ ', '')
  if(i.descricao.slice(0,4)=== 'Taxa'){
    apenasTaxa = apenasTaxa + numeroLimpo
  }else if (i.descricao.slice(0,4) === 'Rece'){
    recebimentoTotal += numeroLimpo
  }
    

})

console.log(apenasTaxa)




// Proximo Exercicios

// Retorne um array com a lista abaixo

const transportes = 'Carro ; Moto ; Aviao; Trem; Onibus'

const arrayTransport = transportes.split(';')

console.log(arrayTransport)


// substitua todos os spans, por a

let html = `<ul>
  
  <li><span>Sobre</span></li>

  <li><span>Contato</span></li>

  <li><span>Galeria</span></li>

</ul>`


html = html.split('span').join('a')

console.log(html)


// retorne o ultimo caracter da frase 

const frase = 'Melhor ano'

console.log(frase.slice(-1))


// Retorne o total de taxas

const todasTransas = ['Taxa de Banco', 'TAXA DO PÃO','taxa do mercado', 'deposito bancario', 'TARIFA especial']

todasTransas.forEach((item)=>{
  item = item.toLowerCase();
})
 
console.log(todasTransas)



console.log(Number.parseInt('200.37', 100) * 2)


//Exercicios Math

//retorne um numero aleatorio entre 1050 a 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050) + 1050) 
console.log(aleatorio)

// Retorne o maior numero da lista abaixo

const numeros = '1,212,3,4,3443,5'

let numeroArray = numeros.split(',')

const numeroMaximo = Math.max(...numeroArray)
console.log(numeroMaximo)