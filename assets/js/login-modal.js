let modal = document.querySelector(".modal");
let modalBackground = document.querySelector(".modal-active");
let loginBtn = document.querySelector(".loginBtn");
let closeModal = document.querySelector("#toggle-modal");

function toggleClass() {
  modal.classList.toggle("hide");
  modal.classList.toggle("show");

  modalBackground.classList.toggle("hide");
  modalBackground.classList.toggle("show");
}

loginBtn.addEventListener("click", () => {
  toggleClass();
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
});

closeModal.addEventListener("click", () => {
  toggleClass();
  window.onscroll = function () {
    window.scrollTo();
  };
});

modalBackground.addEventListener("click", () => {
  toggleClass();
  window.onscroll = function () {
    window.scrollTo();
  };
});
