const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    const isOpen = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isOpen);
  });
}

const themeButton = document.getElementById('themeButton');
if (themeButton) {
  themeButton.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    themeButton.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please complete all fields.';
      return;
    }
    if (!emailPattern.test(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      return;
    }
    formMessage.textContent = 'Form is valid. You can now send your message by email.';
  });
}
