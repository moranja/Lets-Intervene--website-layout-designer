class Element {
  constructor() {

    this.leftEdge = 100
    this.rightEdge = 198
    this.bottomEdge = 100
    this.topEdge = 198
    this.borderWidth = 20
    this.renderAll()


    this.rightEdgeIsMoving = false
    document.addEventListener('mousemove', (e) => {
      console.log(this.rightEdgeIsMoving)
      if (this.rightEdgeIsMoving) {
        this.rightEdge = e.clientX
        console.log(this.rightEdge)
      }
    })
    this.rightSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.rightEdgeIsMoving = true
      console.log(this.rightEdgeIsMoving)
    })
    document.addEventListener('mouseup', () => {
      this.rightEdgeIsMoving = false
    })


    this.leftSide.addEventListener('click', function() {
      console.log('left')
    })
    this.bottomSide.addEventListener('click', function() {
      console.log('bottom')
    })
    this.topSide.addEventListener('click', function() {
      console.log('top')
    })
  }

  renderAll() {
    this.leftSide = this.createDiv(
      this.topEdge-this.bottomEdge+this.borderWidth,
      this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.rightSide = this.createDiv(
      this.topEdge-this.bottomEdge+this.borderWidth,
      this.borderWidth,
      this.rightEdge,
      this.bottomEdge
    )
    this.bottomSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.topSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.topEdge
    )
  }

  serveLeft() {
    return this.leftSide
  }
  serveBottom() {
    return this.bottomSide
  }
  serveRight() {
    return this.rightSide
  }
  serveTop() {
    return this.topSide
  }

  appendAllToBody(body) {
    body.append(this.serveLeft())
    body.append(this.serveBottom())
    body.append(this.serveRight())
    body.append(this.serveTop())
  }

  createDiv(height, width, left, bottom) {
  	let div = document.createElement('div')
    div.style.position = 'absolute'
  	div.style.background = 'red'
    div.style.height = `${height}px`
    div.style.width = `${width}px`
    div.style.left = `${left}px`
    div.style.bottom = `${bottom}px`
    return div
  }

}
