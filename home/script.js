Marquee3k.init()

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

$(function() {
    function animationStart() {
        $('#container').addClass('fin');
    }
    setTimeout(animationStart, 250);
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');
    const navItems = document.querySelectorAll('.nav-item');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    function closeDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }

    function toggleDropdown(dropdown) {
        closeDropdowns();
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    }

    navItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown');

        if (dropdown) {
            if ('ontouchstart' in window) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    toggleDropdown(dropdown);
                });
            } else {
                item.addEventListener('mouseenter', () => {
                    closeDropdowns();
                    dropdown.style.display = 'block';
                });
                item.addEventListener('mouseleave', () => {
                    dropdown.style.display = 'none';
                });
            }
        }
    });

    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            closeDropdowns();
        }
    });
});