let currentElement = ""

function renderEditPage(){
    const body = document.querySelector('body')
    body.innerHTML = ""

    const workspaceDiv = document.createElement('div')
    workspaceDiv.id = "layout-workspace"

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

    const editBarDiv = document.createElement('div')
    editBarDiv.className = "w3-bar w3-blue"
    mainContainer.append(editBarDiv)
    // Creating dropdown
    const newDropdown = document.createElement('select')
    newDropdown.id = "element-dropdown"
    // New Button
    const createElementButton = document.createElement('a')
    createElementButton.id = "create-element-button"
    createElementButton.className = "w3-bar-item w3-button"
    createElementButton.innerText = "Create Element"

    createElementButton.addEventListener('click', function() {
      let element = new Element (workspaceDiv)
      let option = document.createElement('option')
      option.id = element.id
      option.value = element.id
      option.selected = ''
      option.textContent = `Element-${element.id}`
      element.option = option
      console.log(element.option)
      newDropdown.append(option)
      setDropdown(element)
    })

    const currentElementDiv = document.createElement('div')
    currentElementDiv.className = "w3-bar-item"

    currentElementDiv.append(newDropdown)
    // Edit Button
    const editElement = document.createElement('a')
    editElement.id = "edit-element-button"
    editElement.className = "w3-bar-item w3-button"
    editElement.innerText = "Edit"

    editElement.addEventListener('click', function() {
      if (currentElement.status === "SAVED") {
        currentElement.editElement()
      }
    })
    // Delete Button
    const deleteElement = document.createElement('a')
    deleteElement.id = "delete-element-button"
    deleteElement.className = "w3-bar-item w3-button"
    deleteElement.innerText = "Delete"

    deleteElement.addEventListener('click', function() {
      if (currentElement.status === "EDIT") {
        currentElement.removeAll()
        newDropdown.removeChild(currentElement.option)
      } else {
        window.alert("Can't delete a finalized element! If you want to delete it, return it to edit mode first.")
      }
    })
    // Save Button
    const saveButton = document.createElement('a')
    saveButton.id = "save-button"
    saveButton.className = "w3-bar-item w3-button w3-right"
    saveButton.innerText = "Save Layout"

    saveButton.addEventListener('click', function() {
      elementAll.forEach(function(element) {
        element.lockInElement()
      })
      fetch('http://localhost:3000/layouts', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: "New Layout", //form.name.value
          user_id: 4,
          html: workspaceDiv.innerHTML
        })
      })
      .then(res => res.json())
      .then(function(res){
        console.log(workspaceDiv.innerHTML)
        console.log(res)
        window.alert(workspaceDiv.innerHTML)
        //
        clearPage()
        renderHomePage()
        renderNavBar()
        // replace these with taking you to the layout page you just created
      })
    })

    editBarDiv.append(createElementButton, currentElementDiv, editElement, deleteElement, saveButton)

    editBarHtmlTag.append(cssHeadTag, EditBarBodyTag)
    htmlTag.append(editBarHtmlTag)

    document.body.append(mainContainer)
    document.body.append(workspaceDiv)

    const form = renderElementForm()
    document.body.append(form)
}

function renderElementForm() {
  const formDiv = document.createElement('div')
  formDiv.id = "id01"
  formDiv.className = "w3-modal"

  const contentDiv = document.createElement('div')
  contentDiv.className = "w3-modal-content"

  const containerDiv = document.createElement('div')
  containerDiv.className = "w3-container"

  const exitButton = document.createElement('span')
  exitButton.className = "w3-button w3-display-topright"
  exitButton.addEventListener('click', function() {
    document.querySelector('#id01').style.display= "none"
  })

  const text = document.createElement('p')
  text.textContent = "Finalize element"

  const elementForm = document.createElement('form')
  const tagInput = document.createElement('input')
  tagInput.type = "text"
  tagInput.id = "element-tag"

  const submitButton = document.createElement('input')
  submitButton.type = "submit"
  submitButton.value = "submit"

  elementForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(tagInput.value)
    console.log(currentElement)
    currentElement.tagName = tagInput.value
    document.querySelector('#id01').style.display= "none"
    currentElement.lockInElement()
  })

  elementForm.append(tagInput)
  elementForm.append(submitButton)

  containerDiv.append(exitButton)
  containerDiv.append(text)
  containerDiv.append(elementForm)
  contentDiv.append(containerDiv)
  formDiv.append(contentDiv)
  return formDiv
}

function setDropdown(element){
  currentElement = element
  const dropdown = document.querySelector('#element-dropdown')
  dropdown.value = currentElement.id
}
