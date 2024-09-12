$(document).ready(function () {
  $("#searchButton").on("click", function () {
    $(".searchResults").empty();
    $.ajax({
      url: `https://api.spoonacular.com/recipes/complexSearch?query=${$(
        "#searchValue"
      ).val()}&apiKey=c7566f79c0de44f08f602b1d3f8dab1f`,
    }).done(function (data) {
      data.results.forEach((recipe) => {
        const searchResults = document.querySelector(".searchResults");
        const newItem = document.createElement("div");
        newItem.classList.add("recipe");
        newItem.innerHTML = `<h3>${recipe.title}</h3><a href="ingredients.html?id=${recipe.id}"><img src=${recipe.image} /></a>`;
        searchResults.appendChild(newItem);
      });
    });
  });
});
