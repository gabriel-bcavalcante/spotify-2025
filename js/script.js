const slides = document.querySelectorAll('.slide');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            const number = entry.target.querySelector('.number');
            if (number && !number.classList.contains('done')) {
                animateNumber(number);
                number.classList.add('done');
            }
        }
    });
}, { threshold: 0.4 });

slides.forEach(slide => observer.observe(slide));

function animateNumber(element) {
    const target = +element.getAttribute('data-target');
    let count = 0;
    const increment = target / 100;

    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            element.innerText = target;
            clearInterval(interval);
        } else {
            element.innerText = Math.floor(count);
        }
    }, 20);
}