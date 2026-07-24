const themeToggle = document.getElementById('themeToggle');
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const bookingError = document.getElementById('bookingError');

const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : '';

const setTheme = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.classList.toggle('light', theme === 'light');
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    localStorage.setItem('mathonsia-theme', theme);
};

const initTheme = () => {
    const savedTheme = localStorage.getItem('mathonsia-theme');
    if (savedTheme) {
        setTheme(savedTheme);
        return;
    }
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
};

const submitBooking = async (event) => {
    event.preventDefault();
    bookingSuccess.hidden = true;
    bookingError.hidden = true;

    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch(`${API_URL}/api/booking`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            bookingSuccess.hidden = false;
            bookingForm.reset();
            setTimeout(() => {
                bookingSuccess.hidden = true;
            }, 6000);
        } else {
            bookingError.textContent = result.error || 'Something went wrong. Please try again.';
            bookingError.hidden = false;
        }
    } catch (error) {
        console.error('Booking error:', error);
        bookingError.textContent = 'Network error. Please check your connection and try again.';
        bookingError.hidden = false;
    }
};

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

bookingForm.addEventListener('submit', submitBooking);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Mobile menu responsive behavior
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        document.querySelector('.site-nav').style.display = 'flex';
    }
});

initTheme();
