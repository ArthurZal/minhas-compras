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

initializeShoppingList()