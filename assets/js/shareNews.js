//Merri DOM Elementet dhe ruaji ne Variabel
const formControl = document.querySelector(".shareNews");
const formTitle = document.querySelector("#title");
const formImg = document.querySelector("#img");
const formAuthor = document.querySelector("#author");
const formContent = document.querySelector("#content");
const formBtn = document.querySelector("#submit");
const showNews = document.querySelector(".showNews");
const scrollToTop = document.querySelector(".go-top");
const inputs = document.querySelectorAll("input");
const texta = document.querySelector("textarea");
let scrollElm = document.querySelectorAll(".news-id");
let scrollEditElm = document.querySelectorAll(".item-edited");
let newNews = document.querySelectorAll(".new-news");
let allNews = [];
let mode = "create";
let editID;
let lastEditedItem;

//Scroll => new-news[-1]
function scrollWhenCreate() {
  newNews[newNews.length - 1].scrollIntoView();
}

//Funksioni qe e bon uodate tabelat prej LS
async function updateNewsTable() {
  //Kthe nga JSON obj => Array w/ parse.
  const ls_news = await JSON.parse(localStorage.getItem("news"));
  let news_html = "";
  //Futu ne storage, for n'th -"item" += HTML
  let i = 1;
  await ls_news.map((item) => {
    news_html += `
    <div class="new-news">
    <p class="news-id">#${i}</p>
        <img src="${item.img}">
        <p id="author-id">${item.author}</p>
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <span>
        <button onclick="editNews(${item.id})">EDIT</button>
        <button onclick="deleteNews(${item.id})">DELETE</button>
        </span>
        </div>
        `;
    i++;
  });
  //Upd DOM var
  scrollElm = document.querySelectorAll(".news-id");
  //Render HTML
  showNews.innerHTML = news_html;
  //After render, select DOM elms
  newNews = document.querySelectorAll(".new-news");
  //Reset mode to create perseri
  mode = "create";
}

//Fut Lajme ne LS. (news) = currentNews
async function addNewsToStorage(news) {
  //Parses the STRING items
  allNews = await JSON.parse(localStorage.getItem("news"));
  //currentNews bohet push => allNews
  allNews.push(news);
  //Array => kthe perseri ne STRING w/ Stringify
  localStorage.setItem("news", JSON.stringify(allNews));
}

//Input values = clear
function clearInputs() {
  formAuthor.value = "";
  formTitle.value = "";
  formImg.value = "";
  formContent.value = "";
}

//Get Items from LS ==> Check if current-news.id == id parameter,
//TRUE => write item's values in inputs ===> mode = 'edit' ('CREATE' onclick = checks for mode)
async function editNews(id) {
  const ls_news = await JSON.parse(localStorage.getItem("news"));
  const n_news = await ls_news.filter((news) => news.id == id);
  console.log(n_news[0].id);
  formAuthor.value = n_news[0].author;
  formTitle.value = n_news[0].title;
  formImg.value = n_news[0].img;
  formContent.value = n_news[0].content;
  editID = id;
  mode = "edit";
  window.scrollTo(0, 1200);
}

//if(mode=='edit') call updateNews ===> Accepts currNews, if currNews.id == editID (passed from editNews)
//Changes values, returns new news, stringify and update!
async function updateNews(currNews) {
  const ls_news = await JSON.parse(localStorage.getItem("news"));
  const u_news = await ls_news.map((n) => {
    if (n.id == editID) {
      n.author = currNews.author;
      n.title = currNews.title;
      n.img = currNews.img;
      n.content = currNews.content;
    }
    return n;
  });
  localStorage.setItem("news", JSON.stringify(u_news));
  updateNewsTable();
}

//Fetch LS, filter news id !== id's te dergume si parameter(updateNewsTable()); ===> set, update
async function deleteNews(id) {
  const ls_news = await JSON.parse(localStorage.getItem("news"));
  const n_news = await ls_news.filter((news) => news.id !== id);
  //Set new list, update()
  localStorage.setItem("news", JSON.stringify(n_news));
  updateNewsTable();
}

//Funksioni onclick "create"
async function Submit(e) {
  //Nese Author == "", default => "Anonymous"
  formAuthor.value == "" ? (formAuthor.value = "Anonymous") : formAuthor.value;
  //Form Validation
  if (formTitle.value == "" || formImg.value == "" || formContent.value == "") {
    inputs[2].style = "border: 2px solid red";
    inputs[3].style = "border: 2px solid red";
    texta.style = "border: 2px solid red";
    //Mos me invoke alert menjehere, ()=>alert('');
    setTimeout(() => alert("You need to fill all RED BORDER inputs!!"), 1000);
  } else {
    inputs[2].style = "border: 1px solid #3b3603;";
    inputs[3].style = "border: 1px solid #3b3603;";
    texta.style = "border: 1px solid #3b3603;";
    let currentNews = {
      id: parseInt(Math.random() * 1000),
      author: formAuthor.value,
      title: formTitle.value,
      img: formImg.value,
      content: formContent.value,
    };
    //Current => Add to LS
    if (mode == "create") {
      alert("The 'CREATING' Force is strong with this one!");
      await addNewsToStorage(currentNews);
      await updateNewsTable();
      scrollWhenCreate();
    }

    //Update LS & HTML
    if (mode == "edit") {
      alert("The 'EDITING' Force is strong with this one!");
      await updateNews(currentNews);
      updateNewsTable();
    }

    //Inputs = Clear
    clearInputs();
  }
}

//OnClick => Scroll 0px, 0px
function scrollHandler() {
  window.scrollTo(0, 0);
}
//Document = always count scroll
document.addEventListener("scroll", function (e) {
  //Ruje scroll-in e fundit si pike reference
  lastScroll = window.scrollY;
  if (lastScroll < 2100) {
    scrollToTop.classList.remove("show");
    scrollToTop.classList.add("hide");
  } else {
    scrollToTop.classList.remove("hide");
    scrollToTop.classList.add("show");
  }
});

//Header typing texts => [x,x,x]
let texts = [
  "WANT TO SHARE SOMETHING",
  "WITH THE COMMUNITY?",
  "- this is the perfect place to be!",
];

//Inicializimi variablave
let atWord1 = 0;
let atWord2 = 0;
let atWord3 = 0;
let arrayText1 = "";
let arrayText2 = "";
let arrayText3 = "";
let newText1 = "";
let newText2 = "";
let newText3 = "";

//First Line typing
function firstTyping() {
  arrayText1 = texts[0];
  newText1 = arrayText1.slice(0, ++atWord1);
  document.querySelectorAll("#nb1")[0].textContent = newText1;
}

//First Line typing
function secondTyping() {
  arrayText2 = texts[1];
  newText2 = arrayText2.slice(0, ++atWord2);
  document.querySelectorAll("#nb1")[1].textContent = newText2;
}

//First Line typing
function thirdTyping() {
  arrayText3 = texts[2];
  newText3 = arrayText3.slice(0, ++atWord3);
  document.querySelector("#nb2").textContent = newText3;
}

//PSE SPO BOHET ME ASYNC AWAIT?????
//Funksioni per typing
type = () => {
  //Run firstTyping()
  firstTyping();
  //if firstTyping() is done, start secondtyping()
  if (newText1.length === arrayText1.length) {
    secondTyping();
    //if secondTyping() is done, start thirdtyping()
    if (newText2.length === arrayText2.length) {
      thirdTyping();
    }
  }
  //FUNCTION, TIME DELAY => per word
  setTimeout(type, 50);
};
//Run function on start
type();

//(isNull == null) => krijo nje empty array te news
let isNull = JSON.parse(localStorage.getItem("news"));
if (isNull == null) {
  localStorage.setItem("news", JSON.stringify([]));
}

//(isNull != null) update the news
updateNewsTable();
