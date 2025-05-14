document.addEventListener('DOMContentLoaded', () => {
    // Get all work cards and their headers
    const workCards = document.querySelectorAll('.work-card');
    
    // Initialize the first card as active
    if (workCards.length > 0) {
        workCards[0].classList.add('active');
    }
    
    // Add click event listeners to work headers
    workCards.forEach(card => {
        const header = card.querySelector('.work-header');
        const toggleBtn = card.querySelector('.toggle-btn');
        
        // Function to toggle card state
        const toggleCard = (event) => {
            // Don't close if clicking on a tag
            if (event.target.closest('.work-tags')) return;
            
            card.classList.toggle('active');
            
            // Optional: close other cards when opening this one
            if (card.classList.contains('active')) {
                workCards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.classList.remove('active');
                    }
                });
            }
        };
        
        // Add click event to header and toggle button
        header.addEventListener('click', toggleCard);
        
        // Prevent event bubbling for tags
        const tags = card.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    });
    
    // Add hover effects to enhance user experience
    workCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Subtle animation when hovering on a card
            if (!card.classList.contains('active')) {
                card.style.transform = 'translateY(-5px)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            // Reset transform on mouse leave if not active
            if (!card.classList.contains('active')) {
                card.style.transform = '';
            }
        });
    });
}); 