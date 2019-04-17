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
        layoutDiv.addEventListener('click', () =>{
            clearPage()
            const workSpaceDiv = document.createElement('div')
            workSpaceDiv.innerHTML = this.html
            document.body.append(workSpaceDiv)
            renderNavBar()
        })
        
        const smallerImg = document.createElement('img')
        smallerImg.style = "width:70%"
        console.log(this.img)
        smallerImg.src = this.img
        layoutDiv.append(smallerImg)

        const hoveredDiv = document.createElement('div')
        hoveredDiv.className = "w3-dropdown-content w3-card-4"
        hoveredDiv.style = "width:50px"

        const largerImg = document.createElement('iframe')
        largerImg.style = "width:100%"
        largerImg.srcdoc = this.html
        hoveredDiv.append(largerImg)
        const layoutName = document.createElement('h2')
        layoutName.innerText = this.name
        hoveredDiv.append(layoutName)
        const createdBy = document.createElement('h2')
        createdBy.innerText = "Created By: " + this.userName
        layoutDiv.append(layoutName, createdBy, hoveredDiv)
        hoveredDiv.append(createdBy)
        document.body.append(layoutDiv)           
    }
}