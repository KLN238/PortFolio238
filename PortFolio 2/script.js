// Fonction pour vérifier si un élément est visible dans la fenêtre
function isElementVisible(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Fonction pour gérer l'animation des éléments
function animateOnScroll() {
    const animatableElements = document.querySelectorAll('.animatable');
    animatableElements.forEach(element => {
        if (isElementVisible(element)) {
            element.classList.add('visible');
        }
    });
}

// Écouter l'événement de défilement pour lancer les animations
window.addEventListener('scroll', animateOnScroll);

// Lancer l'animation pour les éléments visibles au chargement initial
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});
