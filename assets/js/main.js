document.addEventListener("DOMContentLoaded", function () {
    // Charger la barre de navigation
    fetch('/includes/navbar.html')
        .then(response => {
            if (!response.ok) throw new Error("Fichier introuvable");
            return response.text();
        })
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Erreur navbar:", error));

    // Charger le pied de page (footer)
    // On ajoute le "/" devant includes comme pour la navbar !
    fetch('/includes/footer.html')
        .then(response => {
            if (!response.ok) throw new Error("Fichier introuvable");
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error("Erreur du footer:", error));
});

