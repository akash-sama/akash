/**
 * CTA Banner Implementation
 * Add this script to any page to display the "Thanks for watching" CTA banner
 */

(function() {
    // Create the banner structure
    function createBanner() {
        const banner = document.createElement('div');
        banner.className = 'cta-banner';
        
        // HTML structure for the banner
        banner.innerHTML = `
            <button class="cta-close" aria-label="Close">
                <i class="fas fa-times"></i>
            </button>
            
            <h1 class="cta-title">Thanks for Watching!</h1>
            <p class="cta-subtitle">Get in touch if you like what you see!</p>
            
            <div class="cheap-badge">
                <span class="cheap-text">I WORK FOR CHEAP</span>
            </div>
            
            <a href="#contact" class="cta-button">
                <i class="fas fa-rocket"></i> Hire Me Before I Raise My Rates!
            </a>
        `;
        
        // Add Font Awesome if it's not already in the page
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
            document.head.appendChild(fontAwesome);
        }
        
        return banner;
    }
    
    // Add the banner to the page
    function initBanner() {
        // Check if the banner already exists
        if (document.querySelector('.cta-banner')) {
            return;
        }
        
        const banner = createBanner();
        
        // Try to insert the banner in the CTA section if it exists
        const ctaSection = document.getElementById('cta-section');
        if (ctaSection) {
            ctaSection.innerHTML = ''; // Clear existing content
            ctaSection.appendChild(banner);
        } else {
            // Fallback to adding to body
            document.body.appendChild(banner);
        }
        
        // Show the banner after a short delay
        setTimeout(() => {
            banner.classList.add('visible');
        }, 500);
        
        // Add close button functionality
        banner.querySelector('.cta-close').addEventListener('click', function() {
            banner.classList.remove('visible');
            
            // Remove the banner after animation completes
            setTimeout(() => {
                banner.remove();
            }, 800);
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initBanner);
    } else {
        initBanner();
    }
})(); 