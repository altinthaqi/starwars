//DOM variables init
const daysElm = document.querySelector("#days");
const hoursElm = document.querySelector("#hours");
const minutesElm = document.querySelector("#minutes");
const secondsElm = document.querySelector("#seconds");
const ticketElm = document.querySelector("#ticket");
const checkOfferElm = document.querySelector("#checkOffer");
const checkVipElm = document.querySelector("#checkVip");
const peopleElm = document.querySelector("#people");
const totalElm = document.querySelector("#total");
const checkoutElm = document.querySelector(".checkout");

//Ticket Price prej JS
const ticketPrice = 5;
ticketElm.textContent = ticketPrice + "$";
//Total price
let totalPrice = 0;
totalElm.innerHTML = totalPrice + ".0$";
//People - Tickets
let people = 0;
//Checkboxes default = false
let drinks = false;
let vip = false;

//Kalkulimi bohet ktu, i pranon 3 parametra (people, drinks, vip)
function calculateTotal(p, d, v) {
  //Nese people = 0, as nuk i kalkulon
  if (p != 0) {
    // if p,d,v == true
    if (d == true && v == true) {
      d = people * 1;
      v = people * 3;
    }
    // if p,d == true, v == false
    else if (d == true && v == false) {
      d = people * 1;
      v = 0;
    }
    // if p,v == true, d == false
    else if (d == false && v == true) {
      d = 0;
      v = people * 3;
    }
    //Kur kryhen kalkulimet, shumzo ticket people me tp, shtoja d, v
    let tp = ticketPrice * people;
    return (totalPrice = tp + d + v);
  }
  //Nese people == 0, kthej krejt ne 0 edhe mos bo kalkulime
  else if (p == 0) {
    people = 0;
    totalPrice = 0;
    totalElm.textContent = totalPrice + ".0$";
  }
}

//Inputi per people / ticket, update onchange
peopleElm.addEventListener("keyup", (e) => {
  people = e.target.value;
  //Mos me leju ma shum se 20 tickets pernihere
  if (people > 20) {
    people = 20;
    peopleElm.value = people;
    peopleElm.textContent = people;
  }
  //E thirr kalkulimin, i lejon vetem 2 numra mbas pikes dhjetore
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
});

//Kontrollo Drinks
function checkOfferBtn() {
  if (drinks == false) drinks = true;
  else if (drinks == true) drinks = false;
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
}

//Kontrollo VIP
function checkVipBtn() {
  if (vip == false) vip = true;
  else if (vip == true) vip = false;
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
}

//Checkout function
checkoutElm.addEventListener("click", () => {
  //Can't submit if people < 0
  if (people != 0) {
    alert(
      `Thank you for trusting us! \nThis is what you bought:\n---------------------------------------------\n${people} Tickets\n${
        drinks == true ? people + " Drinks" : "No Drinks"
      }\n${
        vip == true ? people + " VIP Seats" : "No VIP Seats"
      }\nFor a total of: ${totalPrice}$`
    );
  } else {
    alert("You need atleast 1 (one) ticket in order to checkout!");
  }
  //Reset values
  people = 0;
  peopleElm.value = "";
  peopleElm.textContent = people;
  totalPrice = 0;
  totalElm.textContent = totalPrice + ".0$";
  drinks = false;
  vip = false;
  checkOfferElm.checked = drinks;
  checkVipElm.checked = vip;
});

//Countdown function
function countDown() {
  //Init Variables
  let now = new Date();
  let eventDate = new Date(now.getFullYear(), 11, 20);

  //Get Time
  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  //Logjika per me e gjet kohen per njesit perkatese
  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);
  h %= 24;
  m %= 60;
  s %= 60;

  //Avoid one digit time
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //Display ne html
  daysElm.textContent = d;
  daysElm.innerText = d;
  hoursElm.textContent = h;
  minutesElm.textContent = m;
  secondsElm.textContent = s;

  //Thirre funksionin qdo 1000ms
  setTimeout(countDown, 1000);
}

//Starto funksionin Countdown
countDown();
