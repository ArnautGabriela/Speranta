new SimpleLightbox({ elements: '.container-realizari a' });
AOS.init({
    duration: 900,
    offset: 100,
    once: true
});



function mobile() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}


function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_n2ci9cr", "template_zk280ap", date)
        .then(function(raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function(error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })
}