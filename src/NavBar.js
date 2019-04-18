function renderNavBar(){

    const navBarDiv = document.createElement('div')
    navBarDiv.className = "w3-bar w3-border w3-large w3-blue"
    navBarDiv.id = 'navbar'
    document.body.prepend(navBarDiv)

    const homePageButton = document.createElement('a')
    homePageButton.className = "w3-bar-item w3-button w3-padding-16"
    homePageButton.id = "home-page-button"
    homePageButton.innerText = 'Home Page'
    homePageButton.addEventListener('click', function(){
        clearPage()
        renderHomePage()
        renderNavBar()
    })

    const layoutsButton = document.createElement('a')
    layoutsButton.className = "w3-bar-item w3-button w3-padding-16"
    layoutsButton.id = "layouts-button"
    layoutsButton.innerText = 'Layouts'
    layoutsButton.addEventListener('click', function(){
        clearPage()
        renderAllLayouts()
    })

    const createLayoutButton = document.createElement('a')
    createLayoutButton.className = "w3-bar-item w3-button w3-padding-16"
    createLayoutButton.id = "create-layouts-button"
    createLayoutButton.innerText = "Create New Layout"
    createLayoutButton.addEventListener('click', function(){
        clearPage()
        renderEditPage()
    })

    const yourPageButton = document.createElement('a')
    yourPageButton.className = "w3-bar-item w3-button w3-padding-16"
    yourPageButton.id = "your-page-button"
    yourPageButton.innerText = "Your Page"
    yourPageButton.addEventListener('click', () => {
        clearPage()
        renderNavBar()
        fetch(`http://localhost:3000/users/${currentUserID}`)
        .then(function(response) {
            return response.json();
        })
        .then(user => {
            user.layouts.forEach(layout => {
                const newLayout = new Layout(layout.name, currentUserID, layout.img, layout.html, user.name)
                newLayout.render()
            })
        })
    })

    navBarDiv.append(homePageButton, layoutsButton, createLayoutButton, yourPageButton)
}

function clearPage(){
    document.body.innerHTML = ''
}
