const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken : "09eda3c5-6eb7-48f2-b966-c6d7af1090f9",
        Username : "jjuansmktkj26@gmail.com",
        Password : "FEA707386039D6C72E6C7C64731DAB2EAF40",
        To : 'jjuansmktkj26@gmail.com',
        From : "jjuansmktkj26@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
    message => {
        if (message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Berhasil dikirim!",
                icon: "Berhasil"
            });
        }
    }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});
