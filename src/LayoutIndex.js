document.addEventListener('DOMContentLoaded', () => {
    layoutsURL = 'http://localhost:3000/layouts'
    fetch(layoutsURL)
    .then(function(res){
        return res.json()
    })
    .then(function(layouts){
        layouts.forEach(function(layout){
            console.log(layout.user.name)
            const newLayout = new Layout(layout.name, layout.user_id, layout.html, layout.user.name)
            newLayout.render()
        })
    })
    .then(function(){
        renderNavBar()
    })
});