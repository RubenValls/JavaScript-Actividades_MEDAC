
function greeting(){
    const nameInfo: HTMLInputElement = document.querySelector('#floatingName').value;
    const surnameInfo: HTMLInputElement = document.querySelector('#floatingSurname').value;
    const actualDate: Date = new Date();

    const container:HTMLDivElement|null = document.querySelector('#greeting');

    if(nameInfo && surnameInfo){
        const info: string = '<h3>Hi: ' + nameInfo + " " + surnameInfo + ", right now is " + actualDate + "</h3";

        container.innerHTML = info;
    }else{
        const info: string = '<h3>Write something, please.</h3';
        container.innerHTML = info;
    }
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', greeting);