// Criando objeto nomal

// const carro = {
//   marca: "Ferrari escudeira",
//   preco: 299999.0,
// };

// // agora, usando função construtora
// //Funbcao construtora, usa letra maiuscula
// function Carro() {
//   (this.marca = "marca"), (this.preco = 0);
// }

// const honda = new Carro();
// (honda.marca = "Honda"),
//   (honda.preco = 100),
//   (honda.andar = () => {
//     console.log("Andou");
//   });

// console.log(honda.andar());

// // Usando funcao Factory

// function Motos(marca, moodelo, ano, valor) {
//   this.marca, this.moodelo, this.ano, this.valor;
// }

// const moto1 = new Motos("yamaha", "fzr 250", 2020, "15.000");

// console.log(moto1)


// function SaborSovete(sorverte, cobertura){
//     this.sabor = sorverte,
//     this.calda = cobertura
// }

// const Morango = new SaborSovete('Sorvete de Morango', 'Calda de Limao')
// console.log(Morango)

function Carro3(marca, precoInicial){
    const taxa = 1.2
    const precoFinal = precoInicial * taxa
    this.marca = marca
    this.precoInicial = precoFinal
}

let Mazda = new Carro3('Mazda', 2500)


