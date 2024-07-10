document.addEventListener('DOMContentLoaded', function() {
    const hobbiesElement = document.querySelector('.hobbies-text');
    const scrollContainer = document.querySelector('.scroll-container');
    const cards = document.querySelectorAll('.card');

    function updateHobbyText(hobby) {
        hobbiesElement.textContent = hobby;
    }

    function handleCardHover() {
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                const hobby = this.getAttribute('data-hobby');
                updateHobbyText(hobby);
            });
        });
    }

    function handleScroll() {
        const scrollPosition = scrollContainer.scrollTop;
        const windowHeight = window.innerHeight;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const cardMiddle = rect.top + rect.height / 2;

            if (cardMiddle > 0 && cardMiddle < windowHeight) {
                const hobby = card.getAttribute('data-hobby');
                updateHobbyText(hobby);
            }
        });
    }

    scrollContainer.addEventListener('scroll', handleScroll);
    handleCardHover();
    handleScroll(); // Initial call to set the correct hobby on page load

    // Card hover effects
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const percentX = (x - centerX) / centerX;
            const percentY = (y - centerY) / centerY;
            
            const maxRotate = 10;
            const rotateX = -percentY * maxRotate;
            const rotateY = percentX * maxRotate;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            
            const glow = card.querySelector('.glow');
            glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0) 60%)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            const glow = card.querySelector('.glow');
            glow.style.background = '';
        });
    });
});