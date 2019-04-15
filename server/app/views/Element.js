class Element {
  constructor(body) {
    this.body = body
    this.leftEdge = 100
    this.rightEdge = 198
    this.bottomEdge = 100
    this.topEdge = 198
    this.borderWidth = 20
    this.renderAll()


    this.rightEdgeIsMoving = false
    document.addEventListener('mousemove', (e) => {
      if (this.rightEdgeIsMoving) {
        this.rightEdge = e.clientX
      }
    })
    document.addEventListener('mouseup', () => {
      this.rightEdgeIsMoving = false
      this.renderAll()
      this.body.innerHTML = ""
      this.appendAllToBody()
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
    this.rightSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.rightEdgeIsMoving = true
    })
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

  appendAllToBody() {
    this.body.append(this.serveLeft())
    this.body.append(this.serveBottom())
    this.body.append(this.serveRight())
    this.body.append(this.serveTop())
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
