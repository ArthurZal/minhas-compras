function initializeShoppingList() {

    const form = document.querySelector("form")
    const inputItem = document.querySelector("#text-item")

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        if(!form || !inputItem || inputItem.value.trim() === '') {
            alert("Erro ao adicionar um item. Verifique se os campos foram preenchidos corretamente.")

        } else {

           handleFormSubmit()

        }    
    })
}

initializeShoppingList()