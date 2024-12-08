// Select all sections to observe
const sections = document.querySelectorAll('.about');

// Set up an observer to track visibility of each section
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to animate
        } else {
            entry.target.classList.remove('visible'); // Remove when out of view
        }
    });
}, {
    threshold: 0.5 // Trigger the animation when 50% of the section is visible
});

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
