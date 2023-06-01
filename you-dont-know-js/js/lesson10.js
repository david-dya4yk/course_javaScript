const button = document.querySelector('button').onclick = createNewLi;

function createNewLi() {
    const inputValue = document.querySelector('input').value 
    const item = document.createElement("li");
    const list = document.querySelector('ul')

    item.innerHTML = inputValue;
    list.append(item)
}
