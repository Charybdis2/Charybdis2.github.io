function filterCards(setName) {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        if (setName === 'all') {
            card.style.display = 'block'; // Show all cards
        } else {
            if (card.getAttribute('data-set') === setName) {
                card.style.display = 'block'; // Show matching cards
            } else {
                card.style.display = 'none'; // Hide non-matching cards
            }
        }
    });
}

function openVariants(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
document.addEventListener('DOMContentLoaded', function() {
    sortCardsByDate();
});

function sortCardsByDate() {
    const cardContainer = document.querySelector('.card-container');
    const cards = Array.from(cardContainer.children);

    cards.sort((a, b) => {
        const dateA = new Date(a.getAttribute('data-date'));
        const dateB = new Date(b.getAttribute('data-date'));
        return dateB - dateA; // Sort by newest first
    });

    // Clear the container and re-append sorted cards
    cardContainer.innerHTML = '';
    cards.forEach(card => cardContainer.appendChild(card));
}
