function primeNumbers(){
    const container = document.querySelector("#node")
    let primeNumbers = []
    for (i=0;i<=100;i++){
        if(checkPrime(i)){
            let para = document.createElement("p")
            para.innerHTML = i
            container.appendChild(para)
        }
    }
}

function checkPrime(number){
    let check = true;
    if(number === 0 || number === 1){
        check = false;
    }else if (number > 1 ){
        for(count = number-1; count > 1; count--){
            if (number % count == 0){
                check = false;
            }
        }
    }
    return check
}