function initializeShoppingList() {

    const form = document.querySelector("form")
    const list = document.querySelector("ul")
    const inputItem = document.querySelector("#text-item")

    if(!form || !list || !inputItem) {
        console.log("Error initialing the shopping list. Check the HTML structure of the page.")
        return;
    }

    form.addEventListener("submit", handleFormSubmit)

}

function handleFormSubmit(event) {
    event.preventDefault();

    const inputItem = document.querySelector("#text-item")
    const list = document.querySelector("ul")
    const itemName =  inputItem.value.trim()

    if(!itemName) {
        alert("Erro ao adicionar novo item. Verifique se os campos foram preenchidos corretamente.")
        return;
    }

    const newListItem = createNewItem(itemName)
    list.appendChild(newListItem)

    inputItem.value = ''
    
}

function createNewItem(itemName) {
    const li = document.createElement('li')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', checkboxChange)

    const span = document.createElement('span')
    span.innerText = itemName

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'Delete'
    deleteButton.addEventListener('click', deleteButtonClick)

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteButton)

    return li;
}

function checkboxChange(event) {
    const span = event.target.closest('li')?.querySelector('span')

    if(event.target.checked) {
        span.classList.add('list-item-effect')
    
    } else {
        span.classList.remove('list-item-effect')
    }


}

function deleteButtonClick(event) {
    const listItem = event.target.closest('li')

    if(listItem) {
        listItem.remove()
        messageDeletedItem()
    }
}

function messageDeletedItem() {
    const divContainer = document.querySelector('.container')
    
    const boxMessage = document.createElement('p')
    boxMessage.textContent = "Item removido"

    const closeButton = document.createElement('button')
    closeButton.textContent = "X"
    closeButton.addEventListener('click', function() {
        divContainer.removeChild(boxMessage)
    })

    boxMessage.appendChild(closeButton)

    divContainer.appendChild(boxMessage)


}

initializeShoppingList()