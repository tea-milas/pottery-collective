// YEAR IN THE FOOTER
const date = new Date();
const year = date.getFullYear();
const $year = document.getElementById("year");
$year.textContent = year;

// NEWSLETTER SUBSCRIBE MESSAGE
function showMessage() {
  const username = document.getElementById("name").value;
  const message = "Thank you for subscribing to our newsconstter ";
  const email = document.getElementById("email").value;

  if (username && email) {
    alert(message + username);
  } else if (username == null) {
    alert("Please write your name!");
  } else if (email == null) {
    alert("Please write your email!");
  }
}

// CONTACT FORM
function submitMsg() {
  const cName = document.getElementById("contactName").value;
  const cSurname = document.getElementById("contactSurname").value;
  const cEmail = document.getElementById("contactEmail").value;
  const cReason = document.getElementById("reason").value;
  const cMessage = document.getElementById("contactMessage").value;

  const fullName = cName + " " + cSurname;

  if (cName && cSurname && cEmail && cMessage) {
    alert("We've received your message " + fullName);
  }
}

// MOBILE NAV
const burger = document.querySelector(".burger i");
const menu = document.querySelector(".menu");
console.log(menu);

function toggleNav() {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  menu.classList.toggle("show");
}

burger.addEventListener("click", function () {
  toggleNav();
});
