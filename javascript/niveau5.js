function password() {
  code = prompt('Entrez le mot de passe. Vous avez 1 seul essais.');
  if (code != "-195")
  {
    location.href = "../html/niveau1.html";
  }
}

password();