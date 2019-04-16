// this should all be obsolete due to editBar, will be deleted later.

// const loadDesignPage = function() {
//   const body = document.querySelector('body')
//   body.innerHTML = ""
//   console.log("test")
//   const newElement = document.createElement('button')
//   newElement.textContent = "new"
//
//   const newDropdown = document.createElement('select')
//
//
//   newElement.addEventListener('click', function() {
//     let element = new Element ()
//     let option = document.createElement('option')
//     option.id = element.id
//     option.value = element.id
//     option.selected = ''
//     option.textContent = `Element-${element.id}`
//     element.option = option
//     newDropdown.append(option)
//   })
//
//   const deleteElement = document.createElement('button')
//   deleteElement.textContent = "delete"
//
//   deleteElement.addEventListener('click', function() {
//     const elementID = newDropdown.value
//     console.log(elementID)
//     const result = elementAll.find(function(x) {
//       return x.id = elementID
//     })
//     console.log(result)
//     if (result.status === "EDIT") {
//       result.removeAll()
//     } else {
//       result.removeFinalDiv()
//     }
//     newDropdown.removeChild(result.option)
//   })
//
//   body.append(newElement)
//   body.append(newDropdown)
//   body.append(deleteElement)
//
//   elementAll.find(function(x) {
//     return x.id = elementID
//   })
//
//
//
// }
