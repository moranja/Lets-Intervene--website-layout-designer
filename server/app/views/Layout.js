class Layout {
    constructor(name, createdBy, html){
        this.name = name
        this.createdBy = createdBy
        this.html = html
    }

    render(){
        const layoutDiv = document.createElement('div')
        layoutDiv.className = "w3-dropdown-hover"
        
        const smallerImg = document.createElement('img')
        smallerImg.style = "width:33%"
        smallerImg.src = "https://loremflickr.com/320/240?lock=1" 
        layoutDiv.append(smallerImg)

        const hoveredDiv = document.createElement('div')
        hoveredDiv.className = "w3-dropdown-content w3-card-4"
        hoveredDiv.style = "width:50px"
        layoutDiv.append(hoveredDiv)
        const largerImg = document.createElement('img')
        largerImg.style = "width:100%"
        largerImg.src = "https://loremflickr.com/320/240?lock=1" 
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