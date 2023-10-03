const arraws = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arraws.forEach((arrow, i) => {
  arrow.addEventListener("click", function () {
    movieLists[i].computedStyleMap.trasform = "translateX(-300px)";
  });
});

function addTranslateX() {
  var myDiv = document.getElementById("myDiv");
  if (myDiv && !myDiv.style.transform) {
    myDiv.style.transform = "translateX(-500px)";
  } else {
    myDiv.style.transform = "translateX(0px)";
  }
}
function addTranslateX2() {
  var myDiv = document.getElementById("myDiv2");
  if (myDiv && !myDiv.style.transform) {
    myDiv.style.transform = "translateX(-500px)";
  } else {
    myDiv.style.transform = "translateX(0px)";
  }
}
function addTranslateX3() {
  var myDiv = document.getElementById("myDiv3");
  if (myDiv && !myDiv.style.transform) {
    myDiv.style.transform = "translateX(-500px)";
  } else {
    myDiv.style.transform = "translateX(0px)";
  }
}
