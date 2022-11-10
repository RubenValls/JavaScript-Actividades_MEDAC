const paintNumbers = () => {
    // We declare the variables
    const numbersList = document.querySelector("#numbers")
    const minNumber = document.querySelector("#minNumber")
    const maxNumber = document.querySelector("#maxNumber")
    const arrayNumbers = getArrayNumbers()

    // Print 100 elements
    printNumbers(arrayNumbers, numbersList)
    
    // Array sorted ascending
    sortNumbers(arrayNumbers)

    // Print Min & Max numbers of the Array
    printMinNumber(arrayNumbers, minNumber)
    printMaxNumber(arrayNumbers, maxNumber)
}


const getArrayNumbers = () => {
    let arrayNumbers = []
    for(i=0; i<100; i++){
        arrayNumbers.push(getRandom())
    }
    return arrayNumbers
}

const printNumbers = (arrayNumbers, numbersList) => {
    let para = document.createElement("p")
    for(i=0; i<arrayNumbers.length; i++){
        if(i<arrayNumbers.length - 1){
            para.textContent += arrayNumbers[i] + ", "
            numbersList.appendChild(para)
        }else{
            para.textContent += arrayNumbers[i] + ". "
            numbersList.appendChild(para)
        }
    }
}

function sortNumbers(arrayNumbers){
    arrayNumbers.sort((a,b) => a - b)
}

const printMinNumber = (arrayNumbers, minNumber) => {
    let fSpan = document.createElement("p")
    fSpan.textContent = arrayNumbers[0]
    minNumber.appendChild(fSpan)
}

const printMaxNumber = (arrayNumbers, maxNumber) => {
    let sSpan = document.createElement("p")
    sSpan.textContent = arrayNumbers[arrayNumbers.length-1]
    maxNumber.appendChild(sSpan)
}

function getRandom() {
    return Math.round(Math.random()*1000);
}