let num = [5,8,2,9,3]
num.push(1) //add conteudo no começo
num.sort() // coloca em ordem crescente
console.log (num)
console.log (`O vetor num tem ${num.length} posições`) //.length para contar qnts posições tem
console.log (`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(5)
    if (pos == -1) {
        console.log ('valor não encontrado')
    } else {
        console.log (`o valor esta na posição ${pos}`)
    }
    