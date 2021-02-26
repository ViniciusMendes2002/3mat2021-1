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


// Inserindo um elemento no fim do vetor
frutas.push('jabuticaba')


console.log(frutas)

//Inserir elementos no início do vetor
frutas.unshift('amora')

console.log(frutas)


// Inserindo em posição intermediaria
//splice() para inserção
// 1° Parâmetro: a posição onde ocorrerá a inserção
// 2° Parâmetro: quantos elementos serão excluídos (0)
// Parâmetros seguintes: elementos a serem inseridos

// Inserindo na 4° posição
frutas.splice(3, 0, 'pêssego')
console.log(frutas)


// Inserindo duas frutas na terceira posição
frutas.splice(2, 0, 'caquí', 'jaca')
console.log(frutas)


// Substituindo a 6° fruta
frutas.splice(5, 1, 'abacate')
console.log(frutas)


