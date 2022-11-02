//Array creation
function randomInt() {
    return Math.floor((Math.random()*100 + 1))
}

arrayNumbers = []

for(i=0;i<20;i++){
    arrayNumbers.push(randomInt())
}

//Print array

let firstNode = document.querySelector(".arrayAleatoria")
arrayNumbers.forEach(value =>{
    let element = document.createElement("li")
    firstNode.appendChild(element).innerHTML = value
})

//Print ordenered array

arrayNumbers.sort((number1,number2) =>{return number1 - number2})
let secondNode = document.querySelector(".arrayOrdenada")
arrayNumbers.forEach(value =>{
    let element = document.createElement("li")
    secondNode.appendChild(element).innerHTML = value
})

console.log(arrayNumbers)

//Pair ordered first array
let thirdNode = document.querySelector(".arrayOrdenadaPar")
let pairArray = []
let oddArray = []
let num
arrayNumbers.forEach(value =>{ //Divide the main array in both
    if(value%2 == 0){
        pairArray.push(value)
    }else{
        oddArray.push(value)
    }
})

pairArray.sort((number1,number2) =>{return number1 - number2})
oddArray.sort((number1,number2) =>{return number1 - number2})

pairArray.forEach(value =>{ //Print first pair
    let element = document.createElement("li")
    thirdNode.appendChild(element).innerHTML = value
})

oddArray.forEach(value =>{
    let element = document.createElement("li")
    thirdNode.appendChild(element).innerHTML = value
})