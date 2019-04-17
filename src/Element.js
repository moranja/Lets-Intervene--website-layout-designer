let i = 1
class Element {
  constructor(body) {
    this.body = body
    this.leftEdge = 100
    this.rightEdge = 200
    this.bottomEdge = 100
    this.topEdge = 200
    this.borderWidth = 10
    this.renderAll()
    this.createEventListeners()
    this.status = "EDIT"
    this.id = i++
    this.option = ""
    this.tagName = "div"
    elementAll.push(this)

    document.addEventListener('mousemove', (e) => {
      if (this.leftEdgeIsMoving) {
        if (e.clientX > this.rightEdge - this.borderWidth) {
          this.leftEdge = this.rightEdge - this.borderWidth
        } else {
          this.leftEdge = e.clientX
        }
        this.reset() //each of these only activates while the mouse is clicked on it's respective div
      } else if (this.bottomEdgeIsMoving) {
        if (window.innerHeight - e.clientY > this.topEdge - this.borderWidth) {
          this.bottomEdge = this.topEdge - this.borderWidth
        } else {
          this.bottomEdge = (window.innerHeight - e.clientY) // window.innerHeight is referenced because the e.clientY origin is the top of the screen, but css styling origin is the bottom of the screen. This inverts it so that it displays correctly.
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
        if (window.innerHeight - e.clientY < this.bottomEdge + this.borderWidth) {
          this.topEdge = this.bottomEdge + this.borderWidth
        } else {
          this.topEdge = (window.innerHeight - e.clientY)
        }
        this.reset()
      } else if (this.interiorIsMoving) {
        this.leftEdge = e.clientX - this.leftDistance
        this.bottomEdge = window.innerHeight-e.clientY - this.bottomDistance
        this.rightEdge = e.clientX + this.rightDistance
        this.topEdge = window.innerHeight-e.clientY + this.topDistance
        this.reset()
      }
    })
    document.addEventListener('mouseup', () => {
      this.leftEdgeIsMoving = false
      this.bottomEdgeIsMoving = false
      this.rightEdgeIsMoving = false
      this.topEdgeIsMoving = false
      this.interiorIsMoving = false
    }) // when mouse is unclicked, all divs stop moving
    this.appendAllToBody()
  }

  createDiv(height, width, left, bottom) {
  	let div = document.createElement('div')
    div.style.position = 'absolute'
  	div.style.background = 'black'
    div.style.height = `${height}px`
    div.style.width = `${width}px`
    div.style.left = `${left}px`
    div.style.bottom = `${bottom}px`
    return div
  } //creates the divs used while modifying layout

  renderAll() {
    this.leftSide = this.createDiv(
      this.topEdge-this.bottomEdge+this.borderWidth,
      this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.bottomSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.bottomEdge
    )
    this.rightSide = this.createDiv(
      this.topEdge-this.bottomEdge+this.borderWidth,
      this.borderWidth,
      this.rightEdge,
      this.bottomEdge
    )
    this.topSide = this.createDiv(
      this.borderWidth,
      this.rightEdge-this.leftEdge+this.borderWidth,
      this.leftEdge,
      this.topEdge
    )
    this.interior = this.createDiv(
      this.topEdge-this.bottomEdge-this.borderWidth,
      this.rightEdge-this.leftEdge-this.borderWidth,
      this.leftEdge+this.borderWidth,
      this.bottomEdge+this.borderWidth
    )
    this.interior.style.background = "white"
  } //uses this.createDiv() to make one div for each side of the element, and one for the interior

  createEventListeners() {
    this.leftSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.leftEdgeIsMoving = true
      setDropdown(this)
    })
    this.bottomSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.bottomEdgeIsMoving = true
      setDropdown(this)
    })
    this.rightSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.rightEdgeIsMoving = true
      setDropdown(this)
    })
    this.topSide.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.topEdgeIsMoving = true
      setDropdown(this)
    })
    this.interior.addEventListener('mousedown', (e) => {
      e.preventDefault()
      this.interiorIsMoving = true
      this.leftDistance = e.clientX-this.leftEdge
      this.bottomDistance = (window.innerHeight-e.clientY)-this.bottomEdge
      this.rightDistance = this.rightEdge-e.clientX
      this.topDistance = this.topEdge-(window.innerHeight-e.clientY)
      setDropdown(this)
    })
    this.interior.addEventListener('dblclick', (e) => {
      e.preventDefault()
      const elementTag = document.querySelector('#element-tag')
      elementTag.value = this.tagName
      document.querySelector('#id01').style.display='block'
    }) //edit options form event listener
  } //adds the event listeners that activate the mousemove event listener when you click on a div

  createFinalDiv() {
    let div = document.createElement(`${this.tagName}`)
    div.style.position = 'absolute'
    div.style.background = 'white'
    div.style.border = "thin dashed black"
    div.style.height = `${(this.topEdge-this.bottomEdge+this.borderWidth)/window.innerHeight*100}%`
    div.style.width = `${(this.rightEdge-this.leftEdge+this.borderWidth)/window.innerWidth*100}%`
    div.style.left = `${(this.leftEdge)/window.innerWidth*100}%`
    div.style.bottom = `${(this.bottomEdge)/window.innerHeight*100}%`
    div.addEventListener('click', (e) => {
      e.preventDefault()
      setDropdown(this)
    })
    div.addEventListener('dblclick', (e) => {
      e.preventDefault()
      this.editElement()
    }) //double clicking a finalized element puts it back in edit mode
    return div
  } //creates the real div the user expects, after they are done modifying it, and converts it to percentage

  renderFinalDiv() {
    this.finalDiv = this.createFinalDiv()
  }

  removeAll() {
    this.leftSide.remove()
    this.bottomSide.remove()
    this.rightSide.remove()
    this.topSide.remove()
    this.interior.remove()
  }

  removeFinalDiv() {
    this.finalDiv.remove()
  }

  appendAllToBody() {
    this.body.append(this.leftSide)
    this.body.append(this.bottomSide)
    this.body.append(this.rightSide)
    this.body.append(this.topSide)
    this.body.append(this.interior)
  }

  appendFinalToBody() {
    this.body.append(this.finalDiv)
  }

  reset() {
    this.removeAll()
    this.renderAll()
    this.createEventListeners()
    this.appendAllToBody()
  } //removes all working divs from body, resets them, and adds them back to the body. called constantly during mousemove

  lockInElement() {
    this.status = "SAVED"
    this.removeAll()
    this.renderFinalDiv()
    this.appendFinalToBody()
  } //converts the working divs of the element into one div

  editElement() {
    this.status = "EDIT"
    this.removeFinalDiv()
    this.renderAll()
    this.createEventListeners()
    this.appendAllToBody()
  } //allows a user to return to edit a "locked in" element
}

elementAll = []
