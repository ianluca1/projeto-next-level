// Procurar o botão 
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    // Duplicar os campos (qual campo?)
    const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldsContainer.querySelectorAll('input')

    // para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })
    
    // Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}
