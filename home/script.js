document.addEventListener('DOMContentLoaded', function() {
    const hobbies = ["Programmer", "Designer", "Musician", "Photographer"];
    let currentIndex = 0;

    setInterval(() => {
        const hobbiesElement = document.querySelector('.hobbies-text');
        if (hobbiesElement) {
            hobbiesElement.textContent = hobbies[currentIndex];
            currentIndex = (currentIndex + 1) % hobbies.length;
        } else {
            console.error('Element with class "hobbies-text" not found.');
        }
    }, 1000);
});

document.querySelectorAll('.card').forEach(card => {
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