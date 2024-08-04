const form = document.querySelector("form");
const fullName = document.getElementById("name")
const gmail = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")


function sendEmail(){

    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${gmail.value}
    <br> Phone: ${phone.value} <br> Subject: ${subject.value}<br>
     Message: ${message.value}`;

    console.log("Sending email...");
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "lbogveradze12@gmail.com",
        Password : "178E7F23B73E84EEBC38796C1F253C3C70B2",
        To : 'lbogveradze12@gmail.com',
        From : "lbogveradze12@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Success",
                text: "Message Sent!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs(){
    const items = document.querySelectorAll(".item")
    for (const item of items){
        if(item.value == ""){
            item.classList.add("error")
            item.parentElement.classList.add("error")
        }

        if(items[1].value != ""){
            checkEmail();
        }

        items[1].addEventListener("keyup", ()=>{
            checkEmail();
        })
        item.addEventListener("keyup",()=>{
            if(item.value != ""){
                item.classList.remove("error")
                item.parentElement.classList.remove("error")
            }else{
                item.classList.add("error")
                item.parentElement.classList.add("error")
            }
        })
    }
}

function checkEmail(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorTxtEmail = document.querySelector(".error-txt.email")
    if(!gmail.value.match(emailRegex)){
        gmail.classList.add("error")
        gmail.parentElement.classList.add("error")

        if(gmail.value != ""){
            errorTxtEmail.innerText = "Enter a Valid Email Address"
        }else{
            errorTxtEmail.innerText = "Email Adress can't be blank"

        }
    }else{
        gmail.classList.remove("error")
        gmail.parentElement.classList.remove("error")
    }

}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    checkInputs();
    console.log("Form submitted"); 
    sendEmail();
})


