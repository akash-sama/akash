document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.contact-footer');
    let isFooterVisible = false;
    const scrollThreshold = 50; // pixels from bottom to trigger

    // Function to check if user has scrolled to bottom
    const isAtBottom = () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;
        return pageHeight - scrollPosition <= scrollThreshold;
    };

    // Function to handle scroll
    const handleScroll = () => {
        if (isAtBottom() && !isFooterVisible) {
            footer.classList.add('visible');
            isFooterVisible = true;
        } else if (!isAtBottom() && isFooterVisible) {
            footer.classList.remove('visible');
            isFooterVisible = false;
        }
    };

    // Add scroll event listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Initial check
    handleScroll();
}); 