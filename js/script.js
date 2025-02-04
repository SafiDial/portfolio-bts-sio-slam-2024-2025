//======================== scrolled à l'en-tête lors du défilement ========================\\

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Si on défile plus de 50px
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


//======================== Gestion du menu burger =======================\\

// Sélectionner les éléments du menu burger et du menu de navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// l'événement pour le menu burger
burger.addEventListener('click', () => {
    // pour ouvrir/fermer le menu
    navLinks.classList.toggle('active');

    // Ajoute ou enlever la classe 'active' pour le burger (transforme en X)
    burger.classList.toggle('active');

    // Ajouter une animation de "slide" pour les éléments du menu
    if (!navLinks.classList.contains('active')) {
        navItems.forEach(item => {
            item.style.animation = 'none'; // Réinitialiser les animations
        });
    } else {
        navItems.forEach((item, index) => {
            item.style.animation = `slideIn 0.5s forwards ${index * 0.1}s`; // Animation du menu
        });
    }
});

//========================= Affichage des informations GitHub dans un modal ======================\\

document.getElementById('github-icon').addEventListener('click', function (event) {
    event.preventDefault(); // pour empêcher la redirection par défaut du lien
    const modal = document.getElementById('profile-modal');
    modal.style.display = 'block'; // pour afficher le modal

    // Appel à l'API GitHub pour récupérer les informations de l'utilisateur
    fetch('https://api.github.com/users/SafiDial')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données GitHub');
            }
            return response.json();
        })
        .then(data => {
            // Remplir les informations dans le modal
            document.getElementById('avatar').src = data.avatar_url || '';
            document.getElementById('username').textContent = data.login || 'Nom d’utilisateur indisponible';
            document.getElementById('location').textContent = data.location || 'Localisation non renseignée';
            document.getElementById('profile-link').href = data.html_url || '#';
        })
        .catch(error => {
            console.error('Erreur :', error);
            alert("Impossible de charger les données GitHub. Veuillez réessayer plus tard.");
        });
});

// Gestion de la fermeture du modal
document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('profile-modal').style.display = 'none'; // Cache le modal
});


//======================= Progression du cercle au défilement==========================\\

document.getElementById('progress-circle').addEventListener('click', function() {
    // Défilement vers le bas avec un comportement fluide
    window.scrollBy({
        top: window.innerHeight, // Descend d'une hauteur d'écran
        behavior: 'smooth' // Effet de défilement fluide
    });
});

// Progression du cercle au défilement
window.addEventListener('scroll', function() {
    var progressCircle = document.getElementById('progress');
    var scrollPosition = window.pageYOffset; // Position de défilement actuelle
    var maxScroll = document.body.scrollHeight - window.innerHeight; // Défilement maximal
    var scrollPercentage = (scrollPosition / maxScroll) * 100; // Pourcentage de défilement

    // la longueur du contour à afficher
    var circumference = 283;
    var offset = circumference - (scrollPercentage / 100) * circumference;
    progressCircle.style.strokeDashoffset = offset;
});





























