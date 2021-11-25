const respHeader = document.querySelector(".responsive-header");
const respLinks = document.querySelector("#responsive-linkss");
const toggleNavBar = document.querySelector("#toggle-navbar");

const toggleClasses = () => {
  if (respHeader.classList.contains("hidden")) {
    respHeader.classList.toggle("hidden");
    respHeader.classList.toggle("show");
    console.log("clicked hidden");
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
  } else if (respHeader.classList.contains("show")) {
    respHeader.classList.toggle("show");
    respHeader.classList.toggle("hidden");
    console.log("clicked show");
    window.onscroll = function () {
      window.scrollTo();
    };
  }
};

toggleNavBar.addEventListener("click", () => {
  toggleClasses();
});
