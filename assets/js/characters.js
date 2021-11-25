//Deklaroi variablat nga DOM-i
const boxesHtml = document.querySelector(".boxes");
const searchBar = document.querySelector("#searchBar");
const scrollToTop = document.querySelector(".go-top");
//characters hold api response.data
let characters = [];

//API endoint and queries
const api_url = "https://akabab.github.io/starwars-api/api/";
const api_all = "/all.json";
const api_id = "id/1.json";

//API CONSUMPTION ME PROMISE
// axios
//   .get(`${api_url}${api_all}`)
//   .then((response) => {
//     fillData(response.data);
//     characters = response.data;
//   })
//   .catch((error) => console.log(error));

//API CONSUMPTION ME PROMISE Async/Await
async function consumeApi() {
  //try-catch nese ka error
  try {
    //kjo "await" me fetch api
    const consumedApi = await axios.get(`${api_url}${api_all}`);
    await fillData(consumedApi.data);
    characters = consumedApi.data;
  } catch (error) {
    console.log(error);
  }
}
//E di se sosht e nevojshme qekjo, po provova me e bo nje -IIFE- function per qejf
(async () => {
  await consumeApi();
})();

//Search characters function
searchBar.addEventListener("keyup", (e) => {
  //Events value = lowercase for case insensitive
  const searchString = e.target.value.toLowerCase();
  //filer every character, return if they include searchString's value
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(searchString);
  });
  //Keep calling fillData to update characters, send filteredCharacters param
  fillData(filteredCharacters);
});

//This is where characters are created, map data, for every item create a box
async function fillData(data) {
  let htmlText;
  await data.map((item) => {
    htmlText += `<div class="box">
    <div class="left">
        <h2 id="name"><span>${item.name}</span></h2>
        <p id="specie">Species: <span>${item.species}</span></p>
        <p id="homeWorld">Homeworld: <span>${item.homeworld}</span></p>
        <p id="affiliation">Affiliation: <span>${
          item.affiliations[0] !== undefined ? item.affiliations[0] : "None"
        }</span></p>
        <a id="wiki" href="${item.wiki}">wiki</a>
    </div>
    <div class="right">
        <img loading="lazy" src="${item.image}" alt="">
    </div>
</div>`;
  });

  //Render this to HTML
  boxesHtml.innerHTML = htmlText;
  //I keept getting an "undefined" #text object in my HTML page, this solved it
  boxesHtml.firstChild.remove();
}

//OnClick => Scroll 0px, 0px
function scrollHandler() {
  window.scrollTo(0, 0);
}
//Document = always count scroll
document.addEventListener("scroll", function (e) {
  //Ruje scroll-in e fundit si pike reference
  lastScroll = window.scrollY;
  if (lastScroll < 500) {
    scrollToTop.classList.remove("show");
    scrollToTop.classList.add("hide");
  } else {
    scrollToTop.classList.remove("hide");
    scrollToTop.classList.add("show");
  }
});
