// document.addEventListener('DOMContentLoaded', function() {
//     console.log(renderHomePage)
//     renderHomePage()
//     renderNavBar()
// })

function renderHomePage(){
    const phrase = document.createElement('p')
    phrase.innerText = 'Hello World!'
    document.body.append(phrase)
}
