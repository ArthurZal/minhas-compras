function addItem() {
    const form = document.querySelector("form")


    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const itemName = document.querySelector("#text-item")
        const list = document.querySelector("ul");

        if (itemName.value === "") {

            return console.log('Erro ao identificar item')

        } 

        function createNewItem (itemName) {
            const checkbox = document.createElement('input')
            checkbox.type = 'checkbox'
            checkbox.addEventListener('change', function(event) {
                if(event.target.checked){
                    span.classList.add('list-item-effect')
                
                } else {
                    span.classList.remove('list-item-effect')
                }
            })

            const span = document.createElement('span')
            span.innerText = itemName.value

            const button = document.createElement('button')
            button.innerText = 'excluir'
            button.addEventListener('click', () => {
                const item = li
                item.remove()
            })


            const li = document.createElement('li')


            li.appendChild(checkbox)
            li.appendChild(span)
            li.appendChild(button)

            return li

        }

        const newListItem = createNewItem(itemName)
        list.appendChild(newListItem)

        itemName.value = ''



    })


}

addItem()

// document.createElement('li')
//         newItem.innerText = itemName.value
//         listItem.appendChild(newItem)
//         console.log(newItem)