// email.js (or main.js)

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("IN3LFSMcCT3SKtRXt"); // Your EmailJS public key

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Add current date/time to hidden input
      const now = new Date().toLocaleString();
      document.getElementById("form-time").value = now;

      emailjs.sendForm("service_700uewl", "template_f35hdva", this)
        .then(() => {
          alert("✅ Message envoyé avec succès !");
          form.reset(); // clear the form
        }, (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Échec de l'envoi. Veuillez vérifier la configuration.");
        });
    });
  } else {
    console.error("❌ Form with ID 'contact-form' not found.");
  }
});
