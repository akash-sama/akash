document.addEventListener('DOMContentLoaded', function() {
    // Get the contact footer
    const contactFooter = document.querySelector('.contact-footer');
    
    if (contactFooter) {
        // COMPLETELY NEW APPROACH - Create an overlay button with inline styles
        const closeButtonHTML = `
            <div id="closeOverlayBtn" style="
                position: fixed !important;
                top: 20px !important;
                right: 20px !important;
                width: 40px !important;
                height: 40px !important;
                background-color: #ff4d4d !important;
                border: 3px solid white !important;
                border-radius: 50% !important;
                color: white !important;
                font-size: 24px !important;
                font-weight: bold !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5) !important;
                z-index: 99999 !important;
                text-align: center !important;
                line-height: 40px !important;
                font-family: Arial, sans-serif !important;
                transform: none !important;
                transition: transform 0.3s ease !important;
                user-select: none !important;
            ">×</div>
        `;
        
        // Remove any existing buttons first
        const existingButtons = document.querySelectorAll('#closeOverlayBtn, .close-btn');
        existingButtons.forEach(btn => btn.remove());
        
        // Add the new button to the body
        document.body.insertAdjacentHTML('beforeend', closeButtonHTML);
        
        // Get the button element
        const closeBtn = document.getElementById('closeOverlayBtn');
        
        // Add click event
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                if (contactFooter.classList.contains('collapsed')) {
                    // Expand
                    contactFooter.classList.remove('collapsed');
                    this.setAttribute('aria-label', 'Collapse contact form');
                } else {
                    // Collapse
                    contactFooter.classList.add('collapsed');
                    this.setAttribute('aria-label', 'Expand contact form');
                }
                
                // Store preference
                localStorage.setItem('contactFooterCollapsed', contactFooter.classList.contains('collapsed'));
                
                // Add rotate animation on click
                this.style.transform = contactFooter.classList.contains('collapsed') ? 'rotate(45deg)' : 'rotate(0deg)';
            });
            
            // Check if there's a stored state preference
            const isCollapsed = localStorage.getItem('contactFooterCollapsed') === 'true';
            if (isCollapsed) {
                contactFooter.classList.add('collapsed');
                closeBtn.style.transform = 'rotate(45deg)';
            }
        }
        
        // Log for debugging
        console.log('New overlay close button added:', closeBtn);
    }
}); 