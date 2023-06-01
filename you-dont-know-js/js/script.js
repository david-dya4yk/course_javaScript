const books = document.querySelectorAll('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelectorAll('.adv')[0].remove();
const fixTittleBook = book[4].querySelector('.book h2 a');
const newBodyBackground = document.body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";
const fixOrderBook2 = book[0].querySelectorAll('li');
const fixOrderBook5 = book[5].querySelectorAll('li');
const fixOrderBook6 = book[2].querySelectorAll('li');

books[0].prepend(book[1]);
books[0].append(book[2]);
book[0].after(book[4]);
book[2].after(book[2]);

fixTittleBook.textContent = 'Книга 3. this и Прототипы Объектов"';

fixOrderBook2[4].before(fixOrderBook2[6]);
fixOrderBook2[4].before(fixOrderBook2[8]);

fixOrderBook5[2].before(fixOrderBook5[9]);
fixOrderBook5[5].before(fixOrderBook5[2]);
fixOrderBook5[8].before(fixOrderBook5[5]);

fixOrderBook6[0].innerHTML = "<li>Глава 8: За пределами ES6</li>"
fixOrderBook6[9].before(fixOrderBook6[0])







