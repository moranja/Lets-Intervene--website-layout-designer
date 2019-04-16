class Element {
  constructor(body) {
    this.body = body
    this.leftEdge = 100
    this.rightEdge = 198
    this.bottomEdge = 100
    this.topEdge = 198
    this.borderWidth = 30
    this.renderAll()

    this.leftEdgeIsMoving = false
    this.bottomEdgeIsMoving = false
    this.rightEdgeIsMoving = false
    this.topEdgeIsMoving = false

    document.addEventListener('mousemove', (e) => {
      if (this.leftEdgeIsMoving) {
        if (e.clientX > this.rightEdge - this.borderWidth) {
          this.leftEdge = this.rightEdge - this.borderWidth
        } else {
          this.leftEdge = e.clientX
        }
        this.reset()
      } else if (this.bottomEdgeIsMoving) {
        if (800 - e.clientY > this.topEdge - this.borderWidth) {
          this.bottomEdge = this.topEdge - this.borderWidth
        } else {
          this.bottomEdge = 800 - e.clientY
        }
        this.reset()
      } else if (this.rightEdgeIsMoving) {
        if (e.clientX < this.leftEdge + this.borderWidth) {
          this.rightEdge = this.leftEdge + this.borderWidth
        } else {
          this.rightEdge = e.clientX
        }
        this.reset()
      } else if (this.topEdgeIsMoving) {
        if (800 - e.clientY < this.bottomEdge + this.borderWidth) {
          this.topEdge = this.bottomEdge + this.borderWidth
        } else {
          this.topEdge = 800 - e.clientY
        }
        this.reset()
      } else if (this.interiorIsMoving) {
        this.leftEdge = e.clientX - this.leftDistance
        this.bottomEdge = 800-e.clientY - this.bottomDistance
        this.rightEdge = e.clientX + this.rightDistance
        this.topEdge = 800-e.clientY + this.topDistance
        this.reset()
      }
    })
    document.addEventListener('mouseup', () => {
      this.leftEdgeIsMoving = false
      this.bottomEdgeIsMoving = false
      this.rightEdgeIsMoving = false
      this.topEdgeIsMoving = false
      this.interiorIsMoving = false
    })
  }

  renderAll() {
    this.leftSide = this.createDiv(
      this.topEdge-this.bottomEdge+this.borderWidth,
      this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.leftSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.leftEdgeIsMoving = true
    })
    this.bottomSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.bottomSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.bottomEdgeIsMoving = true
    })
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
    this.topSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.topEdge
    )
    this.topSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.topEdgeIsMoving = true
    })
    this.interior = this.createDiv(
      this.topEdge-this.bottomEdge-this.borderWidth,
      this.rightEdge-this.leftEdge-this.borderWidth,
      this.leftEdge+this.borderWidth,
      this.bottomEdge+this.borderWidth
    )
    this.interior.style.background = "blue"
    this.interior.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.interiorIsMoving = true
      this.leftDistance = e.clientX-this.leftEdge
      this.bottomDistance = (800-e.clientY)-this.bottomEdge
      this.rightDistance = this.rightEdge-e.clientX
      this.topDistance = this.topEdge-(800-e.clientY)
    })
  }

  removeAll() {
    this.leftSide.remove()
    this.bottomSide.remove()
    this.rightSide.remove()
    this.topSide.remove()
    this.interior.remove()
  }

  appendAllToBody() {
    this.body.append(this.leftSide)
    this.body.append(this.bottomSide)
    this.body.append(this.rightSide)
    this.body.append(this.topSide)
    this.body.append(this.interior)
  }

  reset() {
    this.removeAll()
    this.renderAll()
    this.appendAllToBody()
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
