let frutas = ['laranja', 'maça', 'banana', 'pera', 'uva', 'mamão']

// Exibir o vetor
console.log(frutas)

// Tirar o último elemento do vetor
let ultimaFruta = frutas.pop()


console.log(frutas)
console.log(ultimaFruta)

// Tirar o primeiro elemento do vetor
let primeiraFruta = frutas.shift()

console.log(frutas)
console.log(primeiraFruta)

// Removendo de posições intermediárias
// splice()
// 1° Paramêtro: Posição que será removida (A contagem começa em zero)
// 2° Paramêtro: Quantidade de elementos que serão removidos


let terceiraFruta = frutas.splice(2, 1) //Fruta na posição 2
console.log(frutas)
console.log(terceiraFruta) // splice() sempre retorna um vetor
