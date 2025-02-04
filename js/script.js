document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    if (!header) {
        console.error("L'élément <header> n'a pas été trouvé.");
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});



const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

if (!burger || !navLinks || navItems.length === 0) {
    console.error("Un des éléments nécessaires pour le menu burger n'a pas été trouvé.");
} else {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');

        if (!navLinks.classList.contains('active')) {
            navItems.forEach(item => {
                item.style.animation = 'none';
            });
        } else {
            navItems.forEach((item, index) => {
                item.style.animation = `slideIn 0.5s forwards ${index * 0.1}s`;
            });
        }
    });
}



document.getElementById('github-icon').addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById('profile-modal');
    modal.style.display = 'block';

    fetch('https://api.github.com/users/SafiDial')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données GitHub');
            }
            return response.json();
        })
        .then(data => {
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
