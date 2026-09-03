const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      formMessage.textContent = "Message envoyé avec succès !";
      form.reset();
    } else {
      formMessage.textContent = "Une erreur est survenue. Veuillez réessayer.";
    }
  } catch (error) {
    formMessage.textContent =
      "Impossible d'envoyer le message. Vérifiez votre connexion.";
  }
});
