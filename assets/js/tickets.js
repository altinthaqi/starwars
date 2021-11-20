console.log("Hello World!");
const daysElm = document.querySelector("#days");
const hoursElm = document.querySelector("#hours");
const minutesElm = document.querySelector("#minutes");
const secondsElm = document.querySelector("#seconds");
const ticketElm = document.querySelector("#ticket");
const checkOfferElm = document.querySelector("#checkOffer");
const checkVipElm = document.querySelector("#checkVip");
const peopleElm = document.querySelector("#people");
const totalElm = document.querySelector("#total");

const ticketPrice = 5;
ticketElm.textContent = ticketPrice + "$";
let totalPrice = 0;
totalElm.innerHTML = totalPrice + ".0$";
let people = 0;
let drinks = false;
let vip = false;

function calculateTotal(p, d, v) {
  if (p != 0) {
    if (d == true && v == true) {
      d = people * 1;
      v = people * 3;
    } else if (d == true && v == false) {
      d = people * 1;
      v = 0;
    } else if (d == false && v == true) {
      d = 0;
      v = people * 3;
    }
    let tp = ticketPrice * people;
    return (totalPrice = tp + d + v);
  } else if (p == 0) {
    people = 0;
    totalPrice = 0;
    totalElm.textContent = totalPrice + ".0$";
  }
}

peopleElm.addEventListener("keyup", (e) => {
  people = e.target.value;
  if (people > 20) {
    people = 20;
    peopleElm.value = people;
    peopleElm.textContent = people;
  }
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
});

function checkOfferBtn() {
  if (drinks == false) drinks = true;
  else if (drinks == true) drinks = false;
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
}
function checkVipBtn() {
  if (vip == false) vip = true;
  else if (vip == true) vip = false;
  totalElm.textContent = calculateTotal(people, drinks, vip).toFixed(2) + "$";
}

function checkout() {
  alert(
    `Thank you for trusting us! \nThis is what you bought:\n---------------------------------------------\n${people} Tickets\n${
      drinks == true ? people + " Drinks" : "No Drinks"
    }\n${
      vip == true ? people + " VIP Seats" : "No VIP Seats"
    }\nFor a total of: ${totalPrice}$`
  );
}

function countDown() {
  let now = new Date();
  let eventDate = new Date(now.getFullYear(), 12, 1);

  let currentTime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTime;

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  daysElm.textContent = d;
  daysElm.innerText = d;
  hoursElm.textContent = h;
  minutesElm.textContent = m;
  secondsElm.textContent = s;

  setTimeout(countDown, 1000);
}

countDown();
