function renderEditBar(){

    const body = document.querySelector('#body')

    const mainContainer = document.createElement('div')
    mainContainer.className = "w3-container"

    const editBarDiv = document.createElement('div')
    editBarDiv.className = "w3-bar w3-blue"
    mainContainer.append(editBarDiv)

    const saveButton = document.createElement('a')
    saveButton.id = "save-button"
    saveButton.className = "w3-bar-item w3-button w3-right"
    saveButton.innerText = "Save Layout"

    const createElementButton = document.createElement('a')
    createElementButton.id = "create-element-button"
    createElementButton.className = "w3-bar-item w3-button"
    createElementButton.innerText = "Create New Element"

    const textColorDiv = document.createElement('div')
    textColorDiv.className = "w3-dropdown-hover"

    const textColorDropdown = document.createElement('button')
    textColorDropdown.className = "w3-button"
    textColorDropdown.innerText = "Text Color"

    const textColorOptionsDiv = document.createElement('div')
    textColorOptionsDiv.className = "w3-dropdown-content w3-bar-block w3-card-4"
    
    const textColorRed = document.createElement('a')
    textColorRed.id = "red-text"
    textColorRed.className = "w3-bar-item w3-button"
    textColorRed.innerText = "Red"

    const textColorBlue = document.createElement('a')
    textColorBlue.id = "blue-text"
    textColorBlue.className = "w3-bar-item w3-button"
    textColorBlue.innerText = "Blue"

    const textColorGreen = document.createElement('a')
    textColorGreen.id = "Green-text"
    textColorGreen.className = "w3-bar-item w3-button"
    textColorGreen.innerText = "Green"

    textColorOptionsDiv.append(textColorRed, textColorBlue, textColorGreen)

    textColorDiv.append(textColorDropdown, textColorOptionsDiv)

    editBarDiv.append(saveButton, createElementButton, textColorDiv)

    document.body.append(mainContainer)
}