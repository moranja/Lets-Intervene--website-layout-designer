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
            renderNavBar()
            displayLayout(this.html)
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

    static renderAll(){
        fetch('http://localhost:3000/layouts')
        .then(function(res){
            return res.json()
        })
        .then(function(layouts){
            layouts.forEach(function(layout){
                const newLayout = new Layout(layout.name, layout.user_id, layout.img, layout.html, layout.user.name)
                newLayout.render()
            })
            renderNavBar()
        })
    };
}

const displayLayout = function(html) {
  // displays the layout
  const layoutDisplayDiv = document.createElement('div')
  layoutDisplayDiv.style.position = "absolute"
  layoutDisplayDiv.style.height = `${window.innerHeight-61}px`
  layoutDisplayDiv.style.width = `${window.innerWidth}px`
  layoutDisplayDiv.innerHTML = html
  document.body.append(layoutDisplayDiv)
  // modifies navbar with a save layout button
  const navBar = document.querySelector('#navbar')
  const saveThisLayoutButton = document.createElement('a')
  saveThisLayoutButton.className = "w3-bar-item w3-button w3-padding-16 w3-right"
  saveThisLayoutButton.id = "save-this-layout-button"
  saveThisLayoutButton.innerText = "Save This Layout"
  navBar.append(saveThisLayoutButton)
  saveThisLayoutButton.addEventListener('click', () => {
      window.alert(html)
  })
}
