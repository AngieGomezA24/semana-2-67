// const getSearchText = () => {
//     const button = document.getElementById('button');
//     button.addEventListener('click', (e) => {
//         e.preventDefault();
//         const text = document.getElementById('text').value ? document.getElementById('text').value : false;
//     })
// }
// getSearchText();

const testApi = async () => {
    const resultText = await fetch(`https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyA5eVpCATIM5V94Mozw7AzR0AC2teYbF68`, {
        method: 'GET'
    })
    let resultJson;
    if (resultText.ok) {
        resultJson = await resultText.json();
        // console.log(resultJson);
        printOnScreen_0(resultJson.items[0]);
        printOnScreen_1(resultJson.items[1]);
        printOnScreen_2(resultJson.items[4]);
        printOnScreen_3(resultJson.items[3]);
    }
}
testApi();
const printOnScreen_0 = (dataText) => {

    // Imagen
    const bookContainer_00 = document.getElementById('bookContainer_00');

    const bookImage = document.createElement('img');
    bookImage.src = dataText.volumeInfo.imageLinks.thumbnail;
    bookContainer_00.appendChild(bookImage);

    const bookAuthors = document.createElement('p');
    bookAuthors.innerHTML = "<br><FONT SIZE=1.5><b>Autores: </b>" + dataText.volumeInfo.authors + "</br>" + "<b>Ed: </b>" + dataText.volumeInfo.publisher + ", " + dataText.volumeInfo.publishedDate + "</font>";
    bookContainer_00.appendChild(bookAuthors);

    // Contenido
    const bookContainer_01 = document.getElementById('bookContainer_01');

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = "<b>" + dataText.volumeInfo.title + "</b>";
    bookContainer_01.appendChild(bookTitle);

    const bookSearchFragment = document.createElement('p');
    if (typeof dataText.searchInfo !== "undefined") {
        bookSearchFragment.innerHTML = "<br><b>Fragmento: </b><br>" + dataText.searchInfo.textSnippet;
        bookContainer_01.appendChild(bookSearchFragment);
    }

    var URL = new Vue({el: '#URL_0',
    data:{url: dataText.volumeInfo.previewLink}});
    var bookURL = dataText.volumeInfo.previewLink;
}
const printOnScreen_1 = (dataText) => {

    // Imagen
    const bookContainer_30 = document.getElementById('bookContainer_10');

    const bookImage = document.createElement('img');
    bookImage.src = dataText.volumeInfo.imageLinks.thumbnail;
    bookContainer_10.appendChild(bookImage);

    const bookAuthors = document.createElement('p');
    bookAuthors.innerHTML = "<br><FONT SIZE=1.5><b>Autores: </b>" + dataText.volumeInfo.authors + "</br>" + "<b>Ed: </b>" + dataText.volumeInfo.publisher + ", " + dataText.volumeInfo.publishedDate + "</font>";
    bookContainer_10.appendChild(bookAuthors);

    // Contenido
    const bookContainer_11 = document.getElementById('bookContainer_11');

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = "<b>" + dataText.volumeInfo.title + "</b>";
    bookContainer_11.appendChild(bookTitle);

    const bookSearchFragment = document.createElement('p');
    if (typeof dataText.searchInfo !== "undefined") {
        bookSearchFragment.innerHTML = "<br><b>Fragmento: </b><br>" + dataText.searchInfo.textSnippet;
        bookContainer_11.appendChild(bookSearchFragment);
    }

    var URL = new Vue({el: '#URL_1',
    data:{url: dataText.volumeInfo.previewLink}});
    var bookURL = dataText.volumeInfo.previewLink;
}
const printOnScreen_2 = (dataText) => {

    // Imagen
    const bookContainer_20 = document.getElementById('bookContainer_20');

    const bookImage = document.createElement('img');
    bookImage.src = dataText.volumeInfo.imageLinks.thumbnail;
    bookContainer_20.appendChild(bookImage);

    const bookAuthors = document.createElement('p');
    bookAuthors.innerHTML = "<br><FONT SIZE=1.5><b>Autores: </b>" + dataText.volumeInfo.authors + "</br>" + "<b>Ed: </b>" + dataText.volumeInfo.publisher + ", " + dataText.volumeInfo.publishedDate + "</font>";
    bookContainer_20.appendChild(bookAuthors);

    // Contenido
    const bookContainer_21 = document.getElementById('bookContainer_21');

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = "<b>" + dataText.volumeInfo.title + "</b>";
    bookContainer_21.appendChild(bookTitle);

    const bookSearchFragment = document.createElement('p');
    if (typeof dataText.searchInfo !== "undefined") {
        bookSearchFragment.innerHTML = "<br><b>Fragmento: </b><br>" + dataText.searchInfo.textSnippet;
        bookContainer_21.appendChild(bookSearchFragment);
    }

    var URL = new Vue({el: '#URL_2',
    data:{url: dataText.volumeInfo.previewLink}});
    var bookURL = dataText.volumeInfo.previewLink;
}
const printOnScreen_3 = (dataText) => {

    // Imagen
    const bookContainer_30 = document.getElementById('bookContainer_30');

    const bookImage = document.createElement('img');
    bookImage.src = dataText.volumeInfo.imageLinks.thumbnail;
    bookContainer_30.appendChild(bookImage);

    const bookAuthors = document.createElement('p');
    bookAuthors.innerHTML = "<br><FONT SIZE=1.5><b>Autores: </b>" + dataText.volumeInfo.authors + "</br>" + "<b>Ed: </b>" + dataText.volumeInfo.publisher + ", " + dataText.volumeInfo.publishedDate + "</font>";
    bookContainer_30.appendChild(bookAuthors);

    // Contenido
    const bookContainer_31 = document.getElementById('bookContainer_31');

    const bookTitle = document.createElement('h2');
    bookTitle.innerHTML = "<b>" + dataText.volumeInfo.title + "</b>";
    bookContainer_31.appendChild(bookTitle);

    const bookSearchFragment = document.createElement('p');
    if (typeof dataText.searchInfo !== "undefined") {
        bookSearchFragment.innerHTML = "<br><b>Fragmento: </b><br>" + dataText.searchInfo.textSnippet;
        bookContainer_31.appendChild(bookSearchFragment);
    }

    var URL = new Vue({el: '#URL_3',
    data:{url: dataText.volumeInfo.previewLink}});
    var bookURL = dataText.volumeInfo.previewLink;
}