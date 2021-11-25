//DOM init variables
let modal = document.querySelector(".modal");
let modalBackground = document.querySelector(".modal-active");
let loginBtn = document.querySelector(".loginBtn");
let closeModal = document.querySelector("#toggle-modal");
//Funksioni qe i bon hide ose show modal & overlay
function toggleClass() {
  //if contains hide => remove that class, same for others.
  modal.classList.toggle("hide");
  modal.classList.toggle("show");
  modalBackground.classList.toggle("hide");
  modalBackground.classList.toggle("show");
}

//Butoni login
loginBtn.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass();
  //Nuk te len me bo scroll, rrin veten ne pozicionin 0
  window.onscroll = function () {
    window.scrollTo(0, 0);
  };
});

//Me e mbyll modalin permess X
closeModal.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass();
  //Me e leju perseri scroll-in
  window.onscroll = function () {
    window.scrollTo();
  };
});

modalBackground.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass();
  //Me e leju perseri scroll-in
  window.onscroll = function () {
    window.scrollTo();
  };
});
