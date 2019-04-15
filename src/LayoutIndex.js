document.addEventListener('DOMContentLoaded', () => {
    fetch("localhost:3000/layouts")
    .then(function(res){
        return res.json()
    })
    .then(function(layouts){
        layouts.forEach(function(layoutData){
            const layout = new Layout(layoutData)
            layout.render()
        })
    })
});