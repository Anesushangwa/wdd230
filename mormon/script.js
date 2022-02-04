const favchap = document.querySelector('#favchap');
const buildButton = document.querySelector('button');
const list = document.querySelector('ul');

// buildButton.addEventListener('click', ()=>{
//     const book = favchap.value;
// let li = document.createElement(book);

// document.getElementById('#list').appendChild();


// });

buildButton.onclick = function() {
    let book = favchap.value;
    favchap.value = '';

    const  books = document.createElement('li');
    const listText = document.createElement('span');
    const  deleteBtn = document.createElement('button');


    books.appendChild(listText);
    listText.textContent = book;
    books.appendChild(deleteBtn);
    deleteBtn.innerHTML = '	&#10060';
    list.appendChild(books);

    deleteBtn.onclick = function(e){
        list.removeChild(books);
    }

    favchap.focus();
}