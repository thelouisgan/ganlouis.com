document.addEventListener('DOMContentLoaded', function() {
    const hobbiesElement = document.querySelector('.hobbies-text');
    const cards = document.querySelectorAll('.card');
    let currentHobbyIndex = 1;

    function updateHobbyText(hobby) {
        hobbiesElement.style.opacity = 0;
        setTimeout(() => {
            hobbiesElement.textContent = hobby;
            hobbiesElement.style.opacity = 1;
        }, 500);
    }

    function cycleHobbies() {
        const hobbies = Array.from(cards).map(card => card.getAttribute('data-hobby'));
        updateHobbyText(hobbies[currentHobbyIndex++ % hobbies.length]);
    }

    // Start cycling hobbies every 1 second
    setInterval(cycleHobbies, 2000);
});