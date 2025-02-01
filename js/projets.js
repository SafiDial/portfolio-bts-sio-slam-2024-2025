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



// Sélectionner les éléments du menu burger et du menu de navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// Ajouter l'événement pour le menu burger
burger.addEventListener('click', () => {
// Ajouter ou enlever la classe active pour ouvrir/fermer le menu
navLinks.classList.toggle('active');

// Ajouter ou enlever la classe 'active' pour le burger (transforme en X)
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

