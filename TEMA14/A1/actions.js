printValues();
const formulary = document.querySelector('#form');
formulary.addEventListener('submit', () =>{
    const info = document.querySelector('#textHelpInline');
    const text = document.querySelector('#textInput').value;
    const regex = /^(?=.+[A-Za-z0-9])(?=.*\d)[A-Za-z0-9\d]{3,}$/;
    if(regex.test(text)){
        sessionStorage.setItem(text, text);
        const list = document.querySelector('#list');
        const value = document.createElement('option');
        value.classList.add('form-select');
        value.innerText = text;
        list.appendChild(value);
        info.innerHTML = '<img class="img-fluid m-1" width="40em" src="assets/yes-checkmark-icon.svg" alt="correct text"/>'
    }else{
        info.innerHTML = '<img class="img-fluid m-1" width="40em" src="assets/no-cross-icon.svg" alt="wrong text"/>'
    }
})

function printValues(){
    Object.keys(sessionStorage).forEach(key =>{
        if(sessionStorage.getItem(key) !== 'true'){
            const list = document.querySelector('#list');
            const value = document.createElement('option');
            value.classList.add('form-select');
            value.innerText = sessionStorage.getItem(key);
            list.appendChild(value);
        }
    })
}
