//DOM Variable init
let visionModal = document.querySelector(".vision-modal");
let visionModalBackground = document.querySelector(".vision-modal-active");
let btnVision = document.querySelector(".vision-box");
let visionCloseModal = document.querySelector("#toggle-vision");

//Funksioni qe i bon hide ose show modal & overlay
function toggleClass2() {
  //if contains hide => remove that class, same for others.
  visionModal.classList.toggle("hide");
  visionModal.classList.toggle("show");
  visionModalBackground.classList.toggle("hide");
  visionModalBackground.classList.toggle("show");
}

//Butoni qe e aktivizon Modalin
btnVision.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass2();
  //Bonu Scroll te modali qe ka me u hap
  visionModal.scrollIntoView();
  //Nuk te len me bo scroll, rrin veten ne pozicionin 1550, 1550
  window.onscroll = function () {
    window.scrollTo(1550, 1550);
  };
});

//Me e mbyll modalin permess X
visionCloseModal.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass2();
  //Me e leju perseri scroll-in
  window.onscroll = function () {
    window.scrollTo();
  };
});

visionModalBackground.addEventListener("click", () => {
  //Hide - Show modal
  toggleClass2();
  //Me e leju perseri scroll-in
  window.onscroll = function () {
    window.scrollTo();
  };
});
