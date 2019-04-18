class Layout {
    constructor(name, user_id, img, html, userName){
        this.img = img
        this.name = name
        this.user_id = user_id
        this.html = html
        this.userName = userName
    }
    render(){
        const layoutDiv = document.createElement('div')
        layoutDiv.className = "w3-dropdown-hover"
        layoutDiv.style.padding = "20px"
        layoutDiv.addEventListener('click', () =>{
            clearPage()
            const workSpaceDiv = document.createElement('div')
            workSpaceDiv.style.position = "absolute"
            workSpaceDiv.style.height = `${window.innerHeight-61}px`
            workSpaceDiv.style.width = `${window.innerWidth}px`
            workSpaceDiv.innerHTML = this.html
            document.body.append(workSpaceDiv)
            renderNavBar()
            const navBar = document.querySelector('#navbar')
            const saveThisLayoutButton = document.createElement('a')
            saveThisLayoutButton.className = "w3-bar-item w3-button w3-padding-16"
            saveThisLayoutButton.id = "save-this-layout-button"
            saveThisLayoutButton.innerText = "Save This Layout"
            navBar.append(saveThisLayoutButton)
            saveThisLayoutButton.addEventListener('click', () => {
                // clearPage()
                // renderEditPage()
                // workSpaceDiv.innerHTML = this.html
                window.alert(workSpaceDiv.innerHTML)
            })
        })

        const smallerImg = document.createElement('img')
        smallerImg.style.width = "200px"
        smallerImg.style.height = "200px"
        smallerImg.src = this.img
        smallerImg.className = "w3-round"

        const hoveredDiv = document.createElement('div')
        hoveredDiv.className = "w3-dropdown-content w3-card-4"
        hoveredDiv.style = "width:50px"

        const htmlPreview = document.createElement('iframe')
        htmlPreview.style = "width:100%"
        htmlPreview.srcdoc = this.html

        const layoutName = document.createElement('h2')
        layoutName.innerText = this.name

        const createdBy = document.createElement('h2')
        createdBy.innerText = "Created By: " + this.userName

        layoutDiv.append(smallerImg, layoutName, hoveredDiv)
        hoveredDiv.append(htmlPreview, createdBy)
        document.body.append(layoutDiv)           
    }
}
