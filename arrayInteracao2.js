const aulas = [
    {
        aula:'Html 2',
        minuto: 10 

    },

    {
        aula:'Html 3',
        minuto: 32
    },

    {
        aula : 'JavaScript 1',
        minuto: 23
    },

    {
        aula :'JavaScript 2 ',
        minuto : 12
    }
]


const minutosDeAulas = aulas.map((e)=> {
    return e.minuto
})

console.log(minutosDeAulas)

const totalMinutosDeTodasAulas = minutosDeAulas.reduce((acc, cur)=>{
    return acc + cur
})

console.log(totalMinutosDeTodasAulas)

// Retornando apenas o nome das Aulas 

const ApenasOsNomesDasAulas = aulas.reduce((acumulador, aula, index)=>{
    acumulador[index] = aula.aula
    return acumulador
}, {})

console.log(ApenasOsNomesDasAulas)


/** .Some */


const frutas = ['Banana', 'Uva', 'Manga']
//saber se tem algum especifico no array 

const temUva  = frutas.some((fruta)=>{
    return fruta === 'Uva'
})

console.log(temUva)


// find e findIndex

// find retorna o primeiro valor da interação que seja verdadeiro 
//ex:

const numeral = [23,33,64,73,667,99]

const buscarMaiorQ64 =  numeral.find((numero)=>{
    return numero > 64
})

console.log(buscarMaiorQ64)


// findIdex ao inves de retornar o valor, retorna o index
// ex:

const perifericos = ['mouse','teclado', 'headset', 'mousebung']

const acharIndexMouse = perifericos.findIndex((e)=>{
    return e === 'headset'
})

console.log(acharIndexMouse)


// filter

// retorna os valores que durante ainteração retornam verdadeiro

const celulares = ['motog200','S20fe','iphone XII', null, undefined, 0]

const arrayCelularLimpa = celulares.filter((celular)=>{return celular})

console.log(arrayCelularLimpa)
console.log(celulares)


const numeral2 = [23,33,64,73,667,99]

const maioresq64 = numeral2.filter((e)=>{return e > 65})
console.log(maioresq64)