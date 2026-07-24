const themeToggle = document.getElementById('themeToggle');
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');

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

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookingSuccess.hidden = false;
    bookingForm.reset();
    setTimeout(() => {
        bookingSuccess.hidden = true;
    }, 4500);
});

initTheme();
