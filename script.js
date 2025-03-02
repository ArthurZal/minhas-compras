function initializeShoppingList() {

    const form = document.querySelector("form")
    const list = document.querySelector("ul")
    const inputItem = document.querySelector("#text-item")

    if (!form || !list || !inputItem) {
        return console.log("Error initialing the shopping list. Check the HTML structure of the page.")

    }

    form.addEventListener("submit", handleFormSubmit)

}

function handleFormSubmit(event) {
    event.preventDefault()

    const inputItem = document.querySelector("#text-item")
    const list = document.querySelector("ul")
    const itemName = inputItem.value.trim()

    if (!itemName) {
        alert("Erro ao adicionar novo item. Verifique se o campo foi preenchidos corretamente.")
        inputItem.focus()
        return
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
    deleteButton.classList.add('delete-button-icon')
    deleteButton.addEventListener('click', deleteButtonClick)

    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(deleteButton)

    return li;
}

function checkboxChange(event) {
    const listItem = event.target.closest('li')?.querySelector('span')

    event.target.checked
        ? listItem.classList.add('list-item-effect')
        : listItem.classList.remove('list-item-effect')

}

function deleteButtonClick(event) {
    const listItem = event.target.closest('li')

    if (listItem) {
        listItem.remove()
        messageDeletedItem()
    }
}

function messageDeletedItem() {
    const divContainer = document.querySelector('.container')

    if (!divContainer) {
        console.log('Erro ao buscar elemento. Verifique a estrutur HTML da página')
        return;
    }

    const boxMessage = document.createElement('div')
    boxMessage.classList.add('box-message')

    const alertIcon = document.createElement('img')
    alertIcon.src = '/assets/icons/warning-circle-filled.svg'
    alertIcon.alt = 'warning icon'

    const message = document.createElement('p')
    message.textContent = "O item foi removido da lista!"

    const closeButton = document.createElement('button')
    closeButton.classList.add('icon')


    closeButton.addEventListener('click', function () {
        boxMessage.remove();
    })

    boxMessage.appendChild(alertIcon)
    boxMessage.appendChild(message)
    boxMessage.appendChild(closeButton)
    divContainer.appendChild(boxMessage)

}

initializeShoppingList()