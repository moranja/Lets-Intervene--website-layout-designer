document.addEventListener('DOMContentLoaded', function() {
  const h2 = document.createElement('h2')
  h2.textContent = "Design a new Layout"
  h2.addEventListener('click', function() {
    renderEditBar()
  })
  const body = document.querySelector('body')
  body.append(h2)
})
