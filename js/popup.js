var feedback = document.querySelector(".feedback_button");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-feedback__button-close");

var form = document.querySelector(".modal-feedback__form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  popup.classList.add("modal-animation-bounce")
  overlay.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-animation-error");
  overlay.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!name.value || !email.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-animation-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-animation-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-animation-error");
      overlay.classList.remove("modal-show");
    }
  }
});
