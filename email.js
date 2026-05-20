// sending email

function sendEmail() {
    let parms = {
        Name : document.getElementById("Name").value,
        Email : document.getElementById("Email").value,
        Phone : document.getElementById("Phone").value,
        Comment : document.getElementById("Comment").value
    };

emailjs.send("service_n4culpm","template_74jwmgb", parms).then(function(res){
        alert("Email sent successfully! We will get back to you as soon as possible.");
    });
}