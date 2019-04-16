function renderNavBar(){
    const body = document.querySelector('#body')
    const navBarDiv = document.createElement('div')
    navBarDiv.className = "w3-bar w3-border w3-large w3-blue"
    body.append(navBarDiv)

    const layoutsButton = document.createElement('a')
    layoutsButton.className = "w3-bar-item w3-button w3-padding-16"
    layoutsButton.id = "layouts-button"
    layoutsButton.innerText = 'Layouts'

    const createLayoutButton = document.createElement('a')
    createLayoutButton.className = "w3-bar-item w3-button w3-padding-16"
    createLayoutButton.id = "create-layouts-button"
    createLayoutButton.innerText = "Create New Layout"

    const yourPageButton = document.createElement('a')
    yourPageButton.className = "w3-bar-item w3-button w3-padding-16"
    yourPageButton.id = "your-page-button"
    yourPageButton.innerText = "Your Page"

    navBarDiv.append(layoutsButton, createLayoutButton, yourPageButton)
}
