document.addEventListener("DOMContentLoaded", function() {
  const my_form = document.querySelector("#form");
  console.log(my_form);
  my_form.addEventListener("submit", function(e) {
    e.preventDefault();
    const my_ul = document.querySelector("#my_ul");
    my_li = document.createElement("li");
    my_ul.append(my_li);
    my_li.append(my_form.username.value);
    console.log(my_form.username.value);
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify({
        name: my_form.username.value
        })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(users) {});

    my_form.username.value = "";

  });
  
});
