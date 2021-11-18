let visionModal = document.querySelector(".vision-modal");
let visionModalBackground = document.querySelector(".vision-modal-active");
let btnVision = document.querySelector(".vision-box");
let visionCloseModal = document.querySelector("#toggle-vision");

function toggleClass2() {
  visionModal.classList.toggle("hide");
  visionModal.classList.toggle("show");

  visionModalBackground.classList.toggle("hide");
  visionModalBackground.classList.toggle("show");
}

btnVision.addEventListener("click", () => {
  toggleClass2();
  visionModal.scrollIntoView();
  window.onscroll = function () {
    window.scrollTo(1550, 1550);
  };
  console.log("clicked");
});

visionCloseModal.addEventListener("click", () => {
  toggleClass2();
  window.onscroll = function () {
    window.scrollTo();
  };
});

visionModalBackground.addEventListener("click", () => {
  toggleClass2();
  window.onscroll = function () {
    window.scrollTo();
  };
  console.log("clicked");
});
