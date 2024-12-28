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
    const itemName =  inputItem?.value.trim()

    if(!itemName) {
        console.log("Erro ao adicionar novo item. Verifique se os campos foram preenchidos corretamente.")
        return;
    }

    const newListItem = createNewItem(itemName)
    list.appendChild(newListItem)
    
}

initializeShoppingList()