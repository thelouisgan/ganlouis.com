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