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
        
        const smallerImg = document.createElement('img')
        smallerImg.style = "width:33%"
        smallerImg.src = "http://en.wikipedia.org/"
        layoutDiv.append(smallerImg)

        const hoveredDiv = document.createElement('div')
        hoveredDiv.className = "w3-dropdown-content w3-card-4"
        hoveredDiv.style = "width:50px"
        layoutDiv.append(hoveredDiv)
        const largerImg = document.createElement('img')
        largerImg.style = "width:100%"
        largerImg.src = this.img
        hoveredDiv.append(largerImg)
        const layoutName = document.createElement('h2')
        layoutName.innerText = this.name
        hoveredDiv.append(layoutName)
        const createdBy = document.createElement('h2')
        console.log(this)
        createdBy.innerText = this.userName
        hoveredDiv.append(createdBy)
        document.body.append(layoutDiv)           
    }
}