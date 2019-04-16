function renderEditBar(){

    const htmlTag = document.querySelector('#html')

    const editBarHtmlTag= document.createElement('html')

    const cssHeadTag = document.createElement('head')  

    const cssTitleTag = document.createElement('title')
    cssTitleTag.innerText = "W3.CSS"

    const cssMetaTag = document.createElement('meta')
    cssMetaTag.name = "viewport"
    cssMetaTag.content = "width=device-width, initial-scale=1"

    const cssLinkTag = document.createElement('link')
    cssLinkTag.setAttribute('rel', 'stylesheet')
    cssLinkTag.setAttribute('href', "https://www.w3schools.com/w3css/4/w3.css")
    cssHeadTag.append(cssTitleTag, cssMetaTag, cssLinkTag)

    const EditBarBodyTag = document.createElement('body')

    const mainContainer = document.createElement('div')
    mainContainer.className = "w3-container"
    EditBarBodyTag.append(mainContainer)

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

    editBarHtmlTag.append(cssHeadTag, EditBarBodyTag)

    htmlTag.append(editBarHtmlTag)
    console.log(createElementButton)
    
}