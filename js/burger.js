// Gestion du menu burger : ouverture/fermeture et interactions
function initMenuBurger() {
    const burgerMenu = document.getElementById('burgerMenu');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Vérification de sécurité : si les éléments n'existent pas, on sort
    if (!burgerMenu || !navMenu) return;

    // Toggle du menu au clic sur le burger
    burgerMenu.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        // Ajoute/retire la classe 'active' pour transformer le burger en croix
        burgerMenu.classList.toggle('active');
        // Ajoute/retire la classe 'menu-open' pour afficher/cacher le menu
        navMenu.classList.toggle('menu-open');
    });

    // Fermer le menu au clic sur un lien de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('menu-open');
        });
    });

    // Fermer le menu en cliquant en dehors (sur le fond)
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnBurger = burgerMenu.contains(event.target);
        
        // Si le clic est en dehors du menu ET du burger ET que le menu est ouvert
        if (!isClickInsideNav && !isClickOnBurger && navMenu.classList.contains('menu-open')) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('menu-open');
        }
    });
}
