class Layout {
    constructor(name, user_id, html, userName){
        this.name = name
        this.user_id = user_id
        this.html = html
        this.userName = userName
    }
    render(){
        const layoutDiv = document.createElement('div')
        layoutDiv.className = "w3-dropdown-hover"
        layoutDiv.addEventListener('click', function(){
            document.body.innerHTML = this.html
            renderNavBar()
        })
        
        const smallerImg = document.createElement('img')
        smallerImg.style = "width:33%"
        smallerImg.src = "https://picsum.photos/200/300/?random"
        layoutDiv.append(smallerImg)

        const hoveredDiv = document.createElement('div')
        hoveredDiv.className = "w3-dropdown-content w3-card-4"
        hoveredDiv.style = "width:50px"
        layoutDiv.append(hoveredDiv)
        const largerImg = document.createElement('iframe')
        largerImg.style = "width:100%"
        largerImg.srcdoc = this.html
        hoveredDiv.append(largerImg)
        const layoutName = document.createElement('h2')
        layoutName.innerText = this.name
        hoveredDiv.append(layoutName)
        const createdBy = document.createElement('h2')
        createdBy.innerText = this.userName
        hoveredDiv.append(createdBy)
        document.body.append(layoutDiv)           
    }
}