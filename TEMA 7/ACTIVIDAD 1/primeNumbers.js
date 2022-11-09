let count = 0;
function primeNumbers(){
    const container = document.querySelector("#node")
    if (count === 1){
        removeAllChildNodes(container)
        count = 0
    }else{
        for (i=0;i<=100;i++){
            if(checkPrime(i)){
                let para = document.createElement("p")
                para.innerHTML = i
                container.appendChild(para)
            }
        }
        count = 1
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
