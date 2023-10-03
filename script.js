const arraws = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arraws.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    movieLists[i].computedStyleMap.trasform = "translateX(-300px)";
  });
});
