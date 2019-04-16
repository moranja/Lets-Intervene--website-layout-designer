class Layout {
    constructor(name, createdBy, img, html){
        this.img = img
        this.name = name
        this.createdBy = createdBy
        this.html = html
    }
    render(){
        const layoutDiv = document.createElement('div')
        layoutDiv.className = "w3-dropdown-hover"
        
        const smallerImg = document.createElement('img')
        smallerImg.style = "width:33%"
        smallerImg.src = this.img
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
        createdBy.innerText = this.createdBy
        hoveredDiv.append(createdBy)
        document.body.append(layoutDiv)           
    }
}