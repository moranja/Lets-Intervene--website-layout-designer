let currentElement = ""

function renderEditPage(){
    const body = document.querySelector('body')
    body.innerHTML = ""
    // Edit Bar container
    const mainContainer = document.createElement('div')
    mainContainer.className = "w3-container"
    // Edit Bar
    const editBarDiv = document.createElement('div')
    editBarDiv.className = "w3-bar w3-blue"

    // New Button
    const createElementButton = document.createElement('a')
    createElementButton.id = "create-element-button"
    createElementButton.className = "w3-bar-item w3-button"
    createElementButton.innerText = "Create Element"
    // New Button Event Listener
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

    // Dropdown
    const currentElementDiv = document.createElement('div')
    currentElementDiv.className = "w3-bar-item"
    const newDropdown = document.createElement('select')
    newDropdown.id = "element-dropdown"
    currentElementDiv.append(newDropdown)

    // Edit Button
    const editElement = document.createElement('a')
    editElement.id = "edit-element-button"
    editElement.className = "w3-bar-item w3-button"
    editElement.innerText = "Edit"
    // Edit Button Event Listener
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
    // Delete Button Event Listener
    deleteElement.addEventListener('click', function() {
      if (currentElement.status === "EDIT") {
        currentElement.removeAll()
        currentElement.deleted = true
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
    // Save Button Event Listener
    saveButton.addEventListener('click', function() {
      document.querySelector('#id02').style.display='block'
      const submitLayoutForm = document.querySelector('#new-layout-form')
      submitLayoutForm.addEventListener('submit', function(e){
        e.preventDefault()
        let src = ""
        if(submitLayoutForm.type.value == "Blog"){
          src = "https://www.propertyme.com.au/media/k2/items/cache/817a0b87c8b4a5b09390d4c2ae24ca96_L.jpg"
        }
        else if(submitLayoutForm.type.value == "Social Media"){
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDHI8LBMm6x-ZWYkK62UjYaIMsPulQimDIdddyeUiHGT4Uv8lnA"
        }
        else if(submitLayoutForm.type.value == "Video Player"){
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm1yt3f-Yxzj4cNbk_N65vIOwVo11KcQUbuFInXpE8cBjDNqzG0w"
        }
        else if(submitLayoutForm.type.value == "Notes"){
          src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhudDdOmBxnlzN2zN36yABSJ7s84LXR_luPZQihD3AyC8XBmq4YQ"
        }
        elementAll.forEach(function(element) {
          if (element.deleted === false) {
            element.lockInElement()
          }
        })
        fetch('http://localhost:3000/layouts', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: submitLayoutForm.name.value,
            img: src,
            user_id: currentUserID,
            html: workspaceDiv.innerHTML
          })
        })
        .then(res => res.json())
        .then(function(res){
          document.querySelector('#id02').style.display='none'
          window.alert(workspaceDiv.innerHTML)
          const newWorkSpaceDiv = document.createElement('div')
          newWorkSpaceDiv.style.position = "absolute"
          newWorkSpaceDiv.style.height = `${window.innerHeight-61}px`
          newWorkSpaceDiv.style.width = `${window.innerWidth}px`
          newWorkSpaceDiv.innerHTML = workspaceDiv.innerHTML
          clearPage()
          elementID = 1
          elementAll = []
          document.body.append(newWorkSpaceDiv)
          document.body.style.cursor = "default"
          renderNavBar()
        })
      })
    })
    // Assembling Edit Bar
    editBarDiv.append(createElementButton, currentElementDiv, editElement, deleteElement, saveButton)
    mainContainer.append(editBarDiv)
    document.body.append(mainContainer)
    // Adding Workspace
    const workspaceDiv = document.createElement('div')
    workspaceDiv.id = "layout-workspace"
    document.body.append(workspaceDiv)
    // Adding the Two Modal Forms
    const form = renderElementForm()
    document.body.append(form)
    const saveDiv = renderSaveDiv()
    document.body.append(saveDiv)
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

  elementForm.append(tagInput)

  tagInput.addEventListener('input', function(e) {
    if (tagInput.value === 'img') {
      if (!document.querySelector("#srcAttribute")) {
        const imgOption = document.createElement('input')
        imgOption.type = "text"
        imgOption.id = "srcAttribute"

        elementForm.removeChild(submitButton)
        elementForm.append(imgOption)
        elementForm.append(submitButton)
      }
    } else if (tagInput.value === 'h1' || tagInput.value === 'h2') {
      if (!document.querySelector("#textAttribute")) {
        const textOption = document.createElement('input')
        textOption.type = "text"
        textOption.id = "textAttribute"

        elementForm.removeChild(submitButton)
        elementForm.append(textOption)
        elementForm.append(submitButton)
      }
    } else {
      if (!!document.querySelector("#srcAttribute")) {
        imgOption = document.querySelector("#srcAttribute")
        elementForm.removeChild(imgOption)
      } else if (!!document.querySelector("#textAttribute")) {
        textOption = document.querySelector("#textAttribute")
        elementForm.removeChild(textOption)
      }
    }
  })

  const submitButton = document.createElement('input')
  submitButton.type = "submit"
  submitButton.value = "submit"

  elementForm.addEventListener('submit', (e) => {
    e.preventDefault()
    currentElement.tagName = tagInput.value
    if (!!document.querySelector("#srcAttribute")) {
      imgOption = document.querySelector("#srcAttribute")
      currentElement.srcAttribute = imgOption.value
      elementForm.removeChild(imgOption)
    } else if (!!document.querySelector("#textAttribute")) {
      textOption = document.querySelector("#textAttribute")
      currentElement.textAttribute = textOption.value
      elementForm.removeChild(textOption)
    }
    document.querySelector('#id01').style.display= "none"
    currentElement.lockInElement()
  })

  elementForm.append(submitButton)

  containerDiv.append(exitButton)
  containerDiv.append(text)
  containerDiv.append(elementForm)
  contentDiv.append(containerDiv)
  formDiv.append(contentDiv)
  return formDiv
}

function renderSaveDiv(){

  const saveDiv = document.createElement('div')
  saveDiv.id = "id02"
  saveDiv.className = "w3-modal"

  const contentDiv = document.createElement('div')
  contentDiv.className = "w3-modal-content"

  const containerDiv = document.createElement('div')
  containerDiv.className = "w3-container"

  containerDiv.innerHTML = `<form  id='new-layout-form' class="center">
    <div class="form-group">
        <label>Layout Name</label>
        <input type="text" class="form-control" id="layout-name" name='name' placeholder="Name Your Layout">
    </div>
    <div class="form-group">
        <label>Layout Type</label>
        <select class="form-control" name='type' id="layout-type">
        <option>Blog</option>
        <option>Social Media</option>
        <option>Video Player</option>
        <option>Notes</option>
        </select>
    </div>
    <input type='submit'>
  </form>`

  const exitButton = document.createElement('span')
  exitButton.className = "w3-button w3-display-topright"
  exitButton.addEventListener('click', function() {
    document.querySelector('#id02').style.display= "none"
  })

  containerDiv.prepend(exitButton)
  contentDiv.append(containerDiv)
  saveDiv.append(contentDiv)
  return saveDiv
}

function setDropdown(element){
  currentElement = element
  const dropdown = document.querySelector('#element-dropdown')
  dropdown.value = currentElement.id
}
