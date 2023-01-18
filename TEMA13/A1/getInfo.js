function greeting() {
    var nameInfo = document.querySelector('#floatingName').value;
    var surnameInfo = document.querySelector('#floatingSurname').value;
    var actualDate = new Date();
    var container = document.querySelector('#greeting');
    if (nameInfo && surnameInfo) {
        var info = '<h3>Hi: ' + nameInfo + " " + surnameInfo + ", right now is " + actualDate + "</h3";
        container.innerHTML = info;
    }
    else {
        var info = '<h3>Write something, please.</h3';
        container.innerHTML = info;
    }
}
var btn = document.querySelector('#btn');
btn.addEventListener('click', greeting);
