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
const allNews = [];

//Funksioni qe e bon uodate tabelat prej LS
function updateNewsTable() {
  //Kthe nga JSON obj => Array w/ parse.
  const ls_news = JSON.parse(localStorage.getItem("news"));
  let news_html = "";
  //Futu ne storage, for n'th -"item" += HTML
  let i = 1;
  ls_news.forEach((item) => {
    news_html += `
    <div class="new-news">
    <p class="news-id">#${i}</p>
        <img src="${item.img}">
        <p id="author-id">${item.author}</p>
        <h2>${item.title}</h2>
        <p>${item.content}</p>
        <span>
        <button>EDIT</button>
        <button onclick="deleteNews(${item.id})">DELETE</button>
        </span>
        </div>
        `;
    i++;
  });
  //Render HTML
  showNews.innerHTML = news_html;
}

//Fut Lajme ne LS. (news) = currentNews
function addNewsToStorage(news) {
  //currentNews bohet push => allNews
  allNews.push(news);
  //Array => obj w/ Stringify
  localStorage.setItem("news", JSON.stringify(allNews));
}

//Input values = clear
function clearInputs() {
  formAuthor.value = "";
  formTitle.value = "";
  formImg.value = "";
  formContent.value = "";
}

//Fetch LS, filter news id !== id's te dergume si parameter
function deleteNews(id) {
  const ls_news = JSON.parse(localStorage.getItem("news"));
  const n_news = ls_news.filter((news) => news.id !== id);
  //Set new list, update()
  localStorage.setItem("news", JSON.stringify(n_news));
  updateNewsTable();
}
//Funksioni onclick "create"
function Submit(e) {
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
    alert("The Force is strong with this one!");
    let currentNews = {
      id: parseInt(Math.random() * 1000),
      author: formAuthor.value,
      title: formTitle.value,
      img: formImg.value,
      content: formContent.value,
    };
    //Current => Add to LS
    addNewsToStorage(currentNews);
    //Update LS & HTML
    updateNewsTable();
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

//if(useri) => shfaqi
updateNewsTable();
