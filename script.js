// YEAR IN THE FOOTER
let date = new Date();
let year = date.getFullYear();
const $year = document.getElementById("year");
$year.textContent = year;

// NEWSLETTER SUBSCRIBE MESSAGE
function showMessage(){
    let username = document.getElementById("name").value;
    let message = "Thank you for subscribing to our newsletter ";
    let email = document.getElementById("email").value

    if (username && email) {
        alert(message + username);
    } 
    else if (username == null) {
        alert("Please write your name!");
    }
    else if (email == null) {
        alert("Please write your email!");

    }
};

// CONTACT FORM 
function submitMsg() {
    let cName = document.getElementById("contactName").value;
    let cSurname = document.getElementById("contactSurname").value;
    let cEmail = document.getElementById("contactEmail").value;
    let cReason = document.getElementById("reason").value;
    let cMessage = document.getElementById("contactMessage").value;

    let fullName = cName + " " + cSurname;
    console.log(cEmail + " " + cReason + " " + cMessage)
    
    if (cName && cSurname && cEmail && cMessage){
        alert("We've received your message " + fullName);
    }
    

}

