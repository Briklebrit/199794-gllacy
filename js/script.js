var btn = document.querySelector(".btn-map__feed-back");
var popup = document.querySelector(".pop-up");
var close = popup.querySelector(".pop-up__close");
var form = popup.querySelector("form");

btn.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("popup-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("popup-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      popup.classList.remove("popup-show");
    }
  }
});
