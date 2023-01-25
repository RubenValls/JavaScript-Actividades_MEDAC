printValues();
const formulary = document.querySelector('#form');
const deleteOne = document.querySelector('#deleteSelected');
const deleteAll = document.querySelector('#deleteAll');

formulary.addEventListener('submit', () =>{
    const info = document.querySelector('#textHelpInline');
    const text = document.querySelector('#textInput').value;
    const regex = /^(?=.+[A-Za-z0-9])(?=.*\d)[A-Za-z0-9\d]{3,}$/;
    if(regex.test(text)){
        localStorage.setItem(text, text);
        const list = document.querySelector('#list');
        const value = document.createElement('option');
        value.classList.add('form-select');
        value.innerText = text;
        list.appendChild(value);
        info.innerHTML = '<h5>Stored at localStorage.</h5>'
    }else{
        const list = document.querySelector('#list');
        const value = document.createElement('option');
        value.classList.add('form-select');
        value.innerText = text;
        list.appendChild(value);
        storeAtDb(text);
        info.innerHTML = '<h5>Stored at dataBase.</h5>'
    }
})

deleteOne.addEventListener('click', () =>{
    const value = document.querySelector('#list').value;

    localStorage.removeItem(value);

    const request = window.indexedDB.open("indexedDBTest", 1);
    
    request.onerror = (event) => {
        window.alert('Error with DataBase. Try again please.')
    };
    
    request.onsuccess = (event) => {
        const db = request.result;
        const transaction = db.transaction("info", "readwrite");
        const objectStore = transaction.objectStore("info");
        const objectStoreRequest = objectStore.delete(value);
    };
    location.reload();
})

deleteAll.addEventListener('click', () =>{
    localStorage.clear();
    
    const request = window.indexedDB.open("indexedDBTest", 1);
    
    request.onerror = (event) => {
        window.alert('Error with DataBase. Try again please.')
    };
    
    request.onsuccess = (event) => {
        const db = request.result;
        const transaction = db.transaction("info", "readwrite");
        const objectStore = transaction.objectStore("info");
        const objectStoreRequest = objectStore.clear();
    };
    location.reload();
})

function printValues(){
    Object.keys(localStorage).forEach(key =>{
        if(localStorage.getItem(key) !== 'true'){
            const list = document.querySelector('#list');
            const value = document.createElement('option');
            value.classList.add('form-select');
            value.innerText = localStorage.getItem(key);
            list.appendChild(value);
        }
    })

    const request = window.indexedDB.open("indexedDBTest", 1);
    
    request.onerror = (event) => {
        window.alert('Error with DataBase. Try again please.')
    };
    
    request.onupgradeneeded = () => {
        const db = request.result;
        const store = db.createObjectStore("info", { keyPath: "id" });
        store.createIndex('text', ['text'], {unique: true});
    }

    request.onsuccess = (event) => {
        const db = request.result;
        const transaction = db.transaction("info", "readonly");
        const store = transaction.objectStore("info");
        let allRecords = store.getAll();
        allRecords.onsuccess = () => {
            allRecords.result.forEach(row =>{
                const list = document.querySelector('#list');
                const value = document.createElement('option');
                value.classList.add('form-select');
                value.innerText = row.info;
                list.appendChild(value);
            })
        };
    };
}

function storeAtDb(text){
    const request = window.indexedDB.open("indexedDBTest", 1);
    
    request.onerror = (event) => {
        window.alert('Error saving data. Try again please.')
    };

    request.onupgradeneeded = () => {
        const db = request.result;
        const store = db.createObjectStore("info", { keyPath: "id" });
        store.createIndex('text', ['text'], {unique: true});
    }

    request.onsuccess = (event) => {
        const db = request.result;
        const transaction = db.transaction("info", "readwrite");
        const store = transaction.objectStore("info");

        store.put({id: text, info: text});
        
    };
}
