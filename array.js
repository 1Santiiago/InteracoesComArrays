// // //Metodos modificadores de um array 

// // //.sort = Organioza o array por ordem alafabetica

// // //.unshift = adiciona elementos no incio do array e retorna o lenght da mesma

// // //.push = aadiciona elemernto aop final do array 

// // //.shif = retira o primeiro elemento do array 

// // //.pop = retira o ultimo elemento do array


// // //* Metodos de acessos */

// // //.concat = concatena as arrays


// // // exercicios de array 

// // const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];

// // // Remova o primeiro valor de comidas e coloque em uma variável 

// // let PrimeiraComida = comidas.shift()
// // console.log(PrimeiraComida)

// // // Remova o último valor de comidas e coloque em uma variável

// // let lastValue = comidas.pop()
// // console.log(lastValue)

// // // Adicione 'Arroz' ao final da array

// // comidas.push('Arroz')
// // console.log(comidas)

// // // Adicione 'Peixe' e 'Batata' ao início da array

// // comidas.unshift('Peixa','batata')
// // console.log(comidas)

// // const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
// // 'Julia']

// // // Arrume os estudantes em ordem alfabética

// // estudantes.sort()
// // console.log(estudantes)

// // // Inverta a ordem dos estudantes

// // estudantes.reverse()
// // console.log(estudantes)

// // // Verifique se Joana faz parte dos estudantes

// // console.log(estudantes.includes('Joana'))

// // // Verifique se Juliana faz parte dos estudantes

// // console.log(estudantes.includes('Juliana'))
// // /**
// //  * 
// //  */


// // let html = `<section>
// // <div>Sobre</div>
// // <div>Produtos</div>
// // <div>Contato</div>
// // </section>`

// // html =html.split('section').join('ul').split('div').join('li')


// // // Substitua section por ul e div com li,
// // // utilizando split e join


// // const carros = ['Ford','Fiat','VW','Honda']
// // // Remova o último carro, mas antes de remover
// // // salve a array original em outra variável
// // const copiasDosCarros = carros.slice()
// // carros.pop()

// // console.log(carros, copiasDosCarros)


// //Metodos de interações com arrays

// //forEach 

// const marcas = ['Adidas', 'Nike', 'Fila', 'Puma']

//     marcas.forEach((marca)=>{console.log(`Marca ${marca}`)})


// // Map


// const carros = ['Ford', 'Fiat', 'Bmw','Renault']

// const novosCarrosLowerCase = carros.map((e, i, a)=>{ return e, i , a+i})

// console.log(carros, novosCarrosLowerCase)

// const numeros = [9,1,5,7]

// // numeros x 2

// const numeros2 = numeros.map(n => n * 2)

// console.log(numeros2)
// //somar esse array 

// let somar = numeros.reduce((soma, i) => {
//     return (soma + i)
// })

// console.log(somar)

// // let soma = numeros.reduce(function(soma, i) {
// //     return soma + i;
// // });
// // console.log(soma);


// // const numerosAlterados = numeros.map((numero)=>{return numero + 19 })
// // console.log(numerosAlterados)

// // RETORNO DIRETO NA ARROW FUNCTION

// const valores = [2, 44, 55, 66, 77, 7]

// const valorX3 = valores.map(n => n * 3)

// console.log(valorX3)


// // Map interagindo com objetos


// const consoles = [
//     {
//         Marca: 'Nitendo',
//         Modelo: 'GameBoy'
//     }, 

//     {
//         Marca:'Sony',
//         Modelo: 'Playstation'
//     },

//     {
//         Marca: 'MicroSoft',
//         Modelo:'Xbox'
//     }
// ]

// const apenasModelo = consoles.map(console => console.Modelo)
// console.log(apenasModelo)

// //Outro modelo para fazer muito comun

// function nomesConsole(nome){
//     return nome.Marca
// }

// // const apenasOnome = consoles.map(nomesConsole)

// // console.log(apenasOnome)


// // /* reduce */

// // // O reduce receber um valor novo, chamado de acumulador. Sempre retorna o valor da ultima interação


// const notas=[20, 433, 44]

// const notasComReduce = notas.reduce((acumulador, item, index, array)=>{
//     console.log(acumulador, item, index)
//     return acumulador + item
// }, 0)


// console.log(notasComReduce)


// Maior valor com reduce

// const precos = [66, 872, 232, 97, 987, 99, 77, 2626,8888]

// const maiorValor = precos.reduce((acc, cur)=>{
//     return acc < cur ? cur : acc
// })

// console.log(maiorValor)

const liNovaClasse = document.querySelectorAll(li)
console.log(liNovaClasse)